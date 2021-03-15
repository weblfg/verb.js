### 轻量化bus,js之间通信
* 安装
```
npm i l_bus -S
```
* 使用说明
```
const bus=require('l_bus').Event;
bus.on('send',callback)
//订阅
bus.emit('send',arguments)
//发布
bus.remove('send',callback)
//移除订阅的事件