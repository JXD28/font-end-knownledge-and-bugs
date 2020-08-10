# background 的相关知识点

## 1.背景颜色

background-color: rgb()
background-color: rgba()
background-color: 十六进制
opacity：0~1 透明度

## 2.背景图片

1. 背景图片与内容图片
图片从网页中去除之后，网页本身仍然有意义，那么该图片就可以当成是背景图片

先设置背景颜色，再设置背景图片，以防 背景图片加载失败

background-repeat：x轴，y轴
background-repeat：no-repeat；
2. 加载图片
url()  可以加相对路径，也可以使用绝对路径
使用数据URI
将图文件转换之后直接放到url()中
URI的好处是减少了http请求，但是与此同时也增大了样式表的体积
3. 图片格式
JPEG：有损压缩，压缩率越高，越失真，适合照片，不支持透明度
PNG：无损压缩，不适合照片，因为会很大，适合图标等小尺寸
GIF：动图，除了动图外基本被PNG取代
SVG：矢量图形格式，不会失真，也不会出现锯齿

## 3.背景图片语法

1. 背景位置
background-position：关键字，像素，em，百分比

像素：左侧，顶部的偏移量 ，定位点是图片左上角
百分比：定位点是图片中对应的位置，假设 background-position：：20% 20%；
距离图片左上角和上边各20%的点，这个点会与距离父元素和上边各20%的点重合
关键字：x轴：left，center，right ； y轴：top，center，bottom

高级： 使用calc()函数来进行复杂的定位计算
2. 剪裁与原点
background-clip：border-box，padding-box，content-box
background-origin：border-box，padding-box，content-box  确定定位图片的原点是以哪种模式开始计算的
3. 背景附着
background-attachment：fixed，scroll，local
4. 背景大小：不管页面如何缩放，都让内容保持自己的宽高比
background-size：400px 240px;
使用百分比：
background-size：100% auto； 这样会保持图片自己的宽高比
使用contain：
background-size：contain；浏览器自己会保持图片最大化，又不会改变图片的宽高比。
cover:
background-size：cover；图片会缩放保证覆盖元素的每一个像素，同时又不会变形。
5. 多重背景
先声明的在最上边，后声明的在最下边背景颜色层在所有背景图片下面
如果随后的背景图片属性值少于背景图片的个数，那么相应的值会循环使用。
