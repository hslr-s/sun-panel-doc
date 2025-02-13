import AdItem from "./AdItem.vue";
import { h, render } from 'vue'

const domain = "http://127.0.0.1:3005"
const getPositionInfoAplUrl = (positionId: string) => {
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
  first?: boolean;
  width?: string;
  height?: string;
}

const className = "SunAdvertisingPosition"

let adList:AdItem[] = []

export function deleteAll() {
  const existElement = document.querySelectorAll("." + className)
  if (existElement) {
    existElement.forEach(item => {
      item.remove()
    })
  }
}

async function getPositionInfo(positionId: string) {
  await fetch(getPositionInfoAplUrl(positionId), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
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
}

export default async function sunAdvertisingPosition(options: AdvertisingPositionOptions) {
  await getPositionInfo(options.positionId);

  const vnode = h("div", {
    class: className
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
        width: options.width || "100%",
        height: options.height || "100%",
        cursor: "pointer",
        margin: "2px auto"
      }
    },
  )));

  const targetElement = document.querySelector(options.className);
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