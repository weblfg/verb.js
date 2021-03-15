###  Solve the problem of communication between components
* 解决前端组件间通信的问题
* 安装 install
```
npm i verb.js  -S
```
* Instructions for use
```
const bus=require('verb.js').Event;
bus.on('send',callback)
//订阅
bus.emit('send',arguments)
//发布
bus.remove('send',callback)
//移除订阅的事件
