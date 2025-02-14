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

const className = "SunAdvertisingPosition"

const defaultOptions: AdvertisingPositionOptions = {
  className,
  positionId: "",
  apiDomain: "http://127.0.0.1:3005",
  first: true,
  width: "100%",
  height: "100%",
}

export function deleteByClassName(className: string) {
  const existElement = document.querySelectorAll("." + className)
  if (existElement) {
    existElement.forEach(item => {
      item.remove()
    })
  }
}

async function getPositionInfo(apiDomain:string,positionId: string) {
  return await fetch(getPositionInfoAplUrl(apiDomain,positionId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
}

export default async function sunAdvertisingPosition(options: AdvertisingPositionOptions) {

  let adList: AdItem[] = []

  const optionsCfg= {
    ...defaultOptions,
    ...options
  }

  await getPositionInfo(optionsCfg.apiDomain,optionsCfg.positionId).then((data) => {
    if (data.code === 0) {
      adList = data.data.list as AdItem[]; // 明确指定类型为 AdItem[]
      console.log(adList);
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
        window.open(ad.clickUrl);
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