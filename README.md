# 移动端的一些知识点


#### 一、一些概念性东西

[一些手机概念性东西](https://segmentfault.com/a/1190000008767416#articleHeader8)

[viewport的概念](https://www.cnblogs.com/2050/p/3877280.html)

[viewports的剖析](http://www.w3cplus.com/css/viewports.html)

[使用Flexible实现手淘H5页面的终端适配](https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html)

[再谈Retina下1px的解决方案](https://www.w3cplus.com/css/fix-1px-for-retina.html)

[如何在Vue项目中使用vw实现移动端适配](https://www.w3cplus.com/mobile/vw-layout-in-vue.html)




#### 借鉴淘宝的Flexible 高清适配，做的手机端适配方案

[代码地址为phone-js文件夹下的flexible.js]()



#### 手机端支持promise

目前有些手机是不支持`promise`的，我们需要引入 `polyfill`

1. vue项目中让移动端支持promise

```javascript

npm install babel-polyfill --save   


在main.js引入import 'babel-polyfill'  

```

2. 引入以下地址
[https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js](https://as.alipayobjects.com/g/component/es6-promise/3.2.2/es6-promise.min.js)

3. [也可以用本目录中phone-js文件夹下的es6-promise.min.js]()


#### 手机端解决点击 300ms 延迟

- [手机解决300ms延迟,引入该地址https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js](https://as.alipayobjects.com/g/component/fastclick/1.0.6/fastclick.js)
- [也可以用本目录中phone-js文件夹下的fastclick.js]()