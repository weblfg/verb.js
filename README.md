###  Solve the problem of communication between components
* 安装 install
```
npm i l_bus -S
```
* Instructions for use
```
const bus=require('verb').Event;
bus.on('send',callback)
//订阅
bus.emit('send',arguments)
//发布
bus.remove('send',callback)
//移除订阅的事件