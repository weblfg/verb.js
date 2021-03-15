
exports.Event= (function(){
        let eventList={};
        let on=function(key,fn){
            //订阅
            if(!eventList[key]){
                eventList[key]=[]
            }
            eventList[key].push(fn);
        }
        let emit=function(){
            //发布
            let key=Array.prototype.shift.call(arguments);
            let fns=eventList[key]
            if(fns.length>0){
                fns.forEach(item=>{
                    item.apply(this,arguments);
                })
            }
        }
        let remove=function(key,fn){
            let fns=eventList[key]
            if(!fns){
                return false
            }
            if(!fn){
                //如果没有传入要取消的回调函数
                //key对应的所有的回调函数都要取消
                fns&&(fns.length=0)
            }else{
                //传入具体的要取消的回调函数fn
                fns.forEach((item,index)=>{
                    if(item==fn){
                        fns.splice(index,1)
                    }
                })
            }

        }
       
        return {
            on,
            emit,
            remove,
        }
})()
