let clock = document.querySelector('.clock')


setInterval(()=>{
    let date = new Date().toLocaleTimeString()
    clock.innerHTML = date
},1000)