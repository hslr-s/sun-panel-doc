---
outline: [2,3]
---
# 香水大佬主题


## 纯色极简小图标主题，带日夜模式

![主题预览](/images/advanced/third_theme/xshui/jijian.png)

我增加适配了项目内自带的深色模式功能样式。

使用教程：将以下 `css代码` 直接完整复制到自定义css代码中，或者自定义页脚中。

页脚的方式需要嵌套一层html样式标签，格式为：
```html
<style>
/* 此处粘贴完整复制的代码 */
</style>
```

::: details css代码，请点此查看
```css
/*
Sun-Panel纯色极简小图标主题
作者：xsui
一款纯色极简小图标主题，带日夜模式
写法上以原生样式为主补充修改调整而来，详情图标与小图标模式均兼容，请随意修改分享
*/

@media (prefers-color-scheme: dark) {  

:root {
     --white:#333;
    --wt:#151617;
     --gray:#444;
    --bg:#1a1a1a;
    --bg2: #0000008f;
    --bk3:#f0f0f0;
    --bk2:#999;
    --bk1:#888;
    --bk:#555;
    --bkz:#333;
    
  } 
   
}

@media (prefers-color-scheme: light) {
:root {
     --white:#fff; 
    --wt:#fff;
     --gray:#ccc;
    --bg:#f5f5f5;
    --bg2:#0000001c;
    --bk3:#333;
    --bk2:#777;
    --bk1:#888;
    --bk:#555;
      --bkz:#333;
    
  } 

}

/* 适配项目深色模式 */
.dark{
    --white:#333;
    --wt:#151617;
     --gray:#444;
    --bg:#1a1a1a;
    --bg2: #0000008f;
    --bk3:#f0f0f0;
    --bk2:#999;
    --bk1:#888;
    --bk:#555;
    --bkz:#333;
}


.sun-main .wallpaper{background: var(--bg) !important;}
.w-full{min-width: 90px}
.font-bold {
     font-weight: 500 !important}
.backdrop-blur-\[2px\],.float-btn{    border-radius: 1.5rem !important;    background: var(--white) !important;z-index: 3}
.search-box .search-container{background: var(--white) !important;
    border-radius:25px !important;    box-shadow: 0px 5px 15px 0px var(--bg2) !important;}
.text-base {display: none}
.float-btn svg{color: var(--bk);} 

span.text-shadow,div.text-shadow{text-shadow:none !important;}
 
.group-title.text-shadow,.system-monitor-header .text-shadow,.system-monitor-buttons,.group-buttons{text-shadow:none !important;
    font-size: 15px;
    font-weight: normal;
background: var(--bg);
padding: 0 8px 0 0}
.system-monitor-buttons,.group-buttons{padding: 0 10px;}
.flex.mt-\[20px\].sm\:w-full.lg\:w-\[80\%\]{max-width: 450px}

.flex.mx-\[auto\].items-center.justify-center.text-white{   gap:10px}
.divider.text-base{display: none}

div.item-card-small-icon,.item-card-info {
 
    box-shadow: 0px 5px 15px 0px var(--bg2) , inset 0 0 0 2px var(--white)  !important; 
    width: auto;
    height: 90px;}
div.item-card-small-icon:before,.item-card-container .item-card-info:before{position: absolute;
content: "";
inset:0;    border: 1px solid var(--white) ;    border-radius: 1rem;
background: linear-gradient(160deg, var(--wt) 0%, var(--white) 100%) !important;

 
}
div.item-card-small-icon:after,.item-card-container .item-card-info:after{background: inherit;
    position: absolute;
content: "";
    width: 10px;
    height: 10px;
    inset:auto 10px 10px auto;
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath d='M10.525 3.158A1.483 1.483 0 0 1 12 1.75c.817 0 1.434.652 1.475 1.408.222 4.098 3.252 7.133 7.344 7.355.766.042 1.431.668 1.431 1.499 0 .834-.67 1.46-1.439 1.499-4.085.202-7.114 3.233-7.336 7.33A1.483 1.483 0 0 1 12 22.25a1.483 1.483 0 0 1-1.475-1.408c-.222-4.099-3.251-7.13-7.337-7.331-.77-.038-1.438-.664-1.438-1.498s.669-1.46 1.437-1.498c4.083-.203 7.116-3.253 7.338-7.357z'/%3E%3C/svg%3E");
  mask-size: contain;
  mask-repeat: no-repeat;
z-index: 1}

#item-group-myapp div.item-card-small-icon:after,#item-group-myapp .item-card-container .item-card-info:after{ 
    mask-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8z' fill='%23000' stroke='%23000' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E");
 }
#item-group-gogo div.item-card-small-icon:after,#item-group-gogo .item-card-container .item-card-info:after{ 
    mask-image: url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 48 48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.358 7.31c2.662 3.848 6.186 5.092 7.86 5.215 2.855-1.398 6.203-2.202 9.782-2.202 3.58 0 6.927.804 9.782 2.201 1.674-.122 5.198-1.366 7.86-5.214.757-.821 3.03-.439 2.164 6.573-.289 1.756-1.087 5.585-1.616 7.49.488 1.361.75 2.8.75 4.289C42.94 34.132 34.46 41 24 41S5.06 34.133 5.06 25.662c0-1.489.262-2.928.75-4.289-.529-1.905-1.327-5.735-1.616-7.49C3.328 6.871 5.6 6.49 6.358 7.31z' fill='%23000' stroke='%23000' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M25 31.25c0 .69-1 3.75-1 3.75s-1-3.06-1-3.75.448-1.25 1-1.25 1 .56 1 1.25z' stroke='%23FFF' stroke-width='3'/%3E%3Ccircle cx='17' cy='22' r='4' fill='%23FFF' stroke='%23FFF' stroke-width='3'/%3E%3Ccircle cx='31' cy='22' r='4' fill='%23FFF' stroke='%23FFF' stroke-width='3'/%3E%3C/svg%3E");
 }
.system-monitor div.item-card-small-icon,.system-monitor .item-card-info{background: var(--bkz) !important; height: 70px;}
.text-white.flex.items-center{color: var(--bk3) !important;
z-index: 1}
.icon-small-box .n-image,.item-icon .items-center,.item-icon,.item-icon .n-avatar,
.item-icon img.w-\[35px\],.item-icon img.h-\[35px\]{width: 30px !important;
height: 30px !important;
}
.n-spin-content .w-\[70px\].h-\[70px\]{width: 100%;
height: 90px}
.icon-info-box .n-image,.icon-info-box  .item-icon .n-avatar,
.icon-info-box .item-icon,.icon-info-box .item-icon.overflow-hidden.rounded-xl,.icon-info-box .w-\[70px\].h-full.flex.justify-center.items-center,.icon-info-box .item-icon img.w-\[35px\],.icon-info-box .item-icon img.h-\[35px\], .app-icon-info-icon .item-icon svg{width: 40px !important;
height: 40px !important;
    min-width: 40px;
    min-height: 40px;}
.app-icon-info-icon.w-\[70px\].h-\[70px\]{width: 60px !important;
height: auto !important;}

.icon-info-box div.dot,.item-card-container  div.dot{
    inset: auto 10px 10px auto;
}
.item-icon.overflow-hidden,.item-icon .n-avatar{overflow: inherit !important;}
.n-image img,.n-image svg,.item-icon img,.item-icon svg{    border-radius: 50% !important;
    background: var(--white);
        width: 100%;
   
    box-shadow: 0px 3px 10px 0px var(--bg2) !important;
    padding: 2px;}
.n-image svg,.item-icon svg{  max-width: none;
width: auto}
 
.item-card-container{position: relative;  box-shadow: 0 0 1px rgba(0, 0, 0, 0); 
  transition: transform 0.3s ease-out;}
.item-icon{position: absolute;
inset:auto auto 10px 10px}

.item-card-container:hover, .item-card-container:focus, .item-card-container:active { 
  transform: translateY(-3px);
}
.app-icon-info-icon .item-icon{ 
inset:25px auto auto 10px}
.app-icon-info-text-box{display: flex;
    flex-direction: column;
    height: 90px;
    justify-content: center;}
.app-icon-info-text-box-description{color: var(--bk2)}
.item-card-small-title{color: var(--bk3) !important;}
.item-card-container .item-card-small-title{ position: absolute;
    inset: 5px 5px auto 10px;
    text-align: left;}
.font-extrabold.mb-\[20px\].ml-\[10px\]{margin-left: 0;
    position: relative;    z-index: 1;
color: var(--bk3)}
.font-extrabold.mb-\[20px\].ml-\[10px\]:after{position: absolute;
content: "";
inset:13px 0 auto 0;
height: 1px;    z-index: -1;
background: var(--gray);
background: linear-gradient(90deg, var(--gray) 0%, rgba(0, 0, 0, 0) 100%);}
.font-extrabold.mb-\[20px\].ml-\[10px\] .text-white{color: currentColor}
.item-list .icon-small-box{ 
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) !important;
   
}
.app-icon .app-icon-small-title{display: none}
.item-list.mt-\[50px\]{margin: 20px 0}
div.item-card-small-icon:hover{  box-shadow: 0px 5px 15px 0px var(--bg2) !important;
}

/*顶部距离写死*/
.scroll-container div.p-2\.5.mx-auto{margin-top:50px !important;}
```
:::

## 赞赏码

如果您觉得香水大佬的主题不错，可以考虑通过以下方式支持作者：

![香水大佬打赏码](/images/advanced/third_theme/xshui/donate.png)