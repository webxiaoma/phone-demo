function initPhone() {
	var width = window.screen.width;
	var device = window.devicePixelRatio || 2;
	var scale = 1 / device;
	var meta = document.createElement("meta");
	meta.setAttribute("name", "viewport");
	var content = "width=device-width,user-scalable=no,initial-scale=" + scale + ",maximum-scale=" + scale + ",minimum-scale=" + scale;
	meta.setAttribute("content", content);
	document.head.appendChild(meta);
	document.documentElement.setAttribute("data-dpr", device);
	document.documentElement.style.fontSize = width * device / 7.5 + "px"
}
initPhone();
window.onresize = function() {
	initPhone()
};



/**
 
- 主要思路：

1. 通过 `window.devicePixelRatio` 来获取手机的设备像素比，默认为2
2. 将页面按照像素比进行缩小，
3. 这时，页面上所有的东西都缩小了，我们需要做的时把页面要放大，并实现自适应,我们通过rem来实现页面的自适应。比如我们的设计图宽度时750px, 1rem = 100px , 这里我们应该又这样的公式
  
   根节点的字体大小  =  手机实际宽度 X 设备像素比 / 7.5

 */