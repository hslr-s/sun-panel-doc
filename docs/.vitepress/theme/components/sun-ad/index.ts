import { h, render } from 'vue'

const getPositionInfoAplUrl = (domain:string,positionId: string) => {
  return `${domain}/api/adPosition/getInfo/${positionId}`
}

interface AdItem {
  description: string;
  clickUrl: string;
  isExpired: boolean;
  imgUrl: string;
  name: string;
}

interface AdvertisingPositionOptions {
  className: string;
  positionId: string;
  apiDomain?: string;
  first?: boolean;
  width?: string;
  height?: string;
}

interface Storage {
  uid:string
}

const className = "SunAdvertisingPosition"
const storageName = className

const defaultOptions: AdvertisingPositionOptions = {
  className,
  positionId: "",
  apiDomain: "http://127.0.0.1:3005",
  first: true,
  width: "100%",
  height: "100%",
}

function getStorage(): Storage {
  const storage = localStorage.getItem(storageName);
  if (storage) {
    return JSON.parse(storage);
  }
  return {
    uid: ""
  }
}

function setStorage(storage: Storage){
  localStorage.setItem(storageName, JSON.stringify(storage))
}

async function getPositionInfo(apiDomain:string,positionId: string,uid: string|null) {

  return await fetch(getPositionInfoAplUrl(apiDomain,positionId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: uid!==""?JSON.stringify({ uid }):""
  })
    .then((response) => response.json())
}

function appendQueryParam(url: string, key: string, value: string): string {
  // 解析 URL
  const urlObj = new URL(url);

  // 追加或更新参数
  urlObj.searchParams.set(key, value);

  // 返回完整的 URL 字符串
  return urlObj.toString();
}

export function deleteByClassName(className: string) {
  const existElement = document.querySelectorAll("." + className)
  if (existElement) {
    existElement.forEach(item => {
      item.remove()
    })
  }
}

export default async function sunAdvertisingPosition(options: AdvertisingPositionOptions) {

  let adList: AdItem[] = []

  const optionsCfg= {
    ...defaultOptions,
    ...options
  }

  const s = getStorage();

  await getPositionInfo(optionsCfg.apiDomain || "",optionsCfg.positionId,s.uid).then((data) => {
    if (data.code === 0) {
      adList = data.data.list as AdItem[]; 
      // 保存用户id
      if(s.uid===""){
        s.uid = data.data.uid;
        setStorage(s);
      }
    } else {
      // console.error("Failed to fetch position info:", data.msg);
    }
  })
    .catch((error) => {
      // console.error("Error fetching position info:", error);
    });

  const name = className + "-" + optionsCfg.positionId
  // 创建前先删除已存在元素
  deleteByClassName(name)
  const vnode = h("div", {
    class: name
  }, adList.map(ad => h(
    "img",
    {
      src: ad.imgUrl,
      alt: ad.description,
      title: ad.description,
      onclick: () => {
        window.open(appendQueryParam(ad.clickUrl, "uid", s.uid));
      },
      style: {
        width: optionsCfg.width || "100%",
        height: optionsCfg.height || "100%",
        cursor: "pointer",
        margin: "2px auto"
      }
    },
  )));

  const targetElement = document.querySelector(optionsCfg.className);
  if (targetElement) {
    // 是否插入到第一个元素
    if (options.first) {
      const container = document.createElement("div");
      render(vnode, container);
      targetElement.insertBefore(container.firstChild as HTMLDivElement, targetElement.firstChild);
    } else {
      render(vnode, targetElement);
    }
  }
}