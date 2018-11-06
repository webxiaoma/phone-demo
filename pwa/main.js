
let registration = null;

addEventListener('load',function(){
    if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('servcie-worker.js', {scope: './'})
            .then(function (reg) {
                // 注册成功
                console.log("ServiceWorker 注册成功");

                console.log(reg)
                // 询问用户是否接收通知消息
                Notification.requestPermission(function(result) {
                    //status默认值'default'等同于拒绝 'denied' 意味着用户不想要通知 'granted' 意味着用户同意启用通知   
                    if(result === 'granted'){
                        registration  = reg
                    }
                });
            })
            .catch(function (err) {
                // 注册失败
                console.log('ServiceWorker 注册失败: ', err);
            });
    }

})



// 点击按钮发送消息
let messageBtn = document.getElementById('message_btn')
let inp = document.querySelector('.inputWrap input')
messageBtn.onclick = function(){
    let message = inp.value || "您可以输入消息";
    if(registration){
        registration.showNotification('webxiaoma',{
                // 视觉相关
            "body": message,
            "icon": './img/mxx48.jpg',
            "badge": './img/mxx.ico',
            "image": './img/mxx188.jpg',
            "actions": [
                {
                    action: 'coffee-action',
                    title: '确定',
                    icon: './img/mxx.ico'
                },
                {
                    action: 'doughnut-action',
                    title: '取消',
                    icon: './img/mxx.ico'
                }
            ],
            vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500]
        });
    }

}


