
let registration = null;

addEventListener('load',function(){
    if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('servcie-worker.js', {scope: './'})
            .then(function (reg) {
                // 注册成功
                console.log("ServiceWorker 注册成功");
                registration  = reg
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