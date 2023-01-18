window.addEventListener("DOMContentLoaded" , () => {
    const btn = document.querySelector('.btn');
    let inputCityName = document.querySelector('#cityName');
    let cityName = document.querySelector('#city');
    let temperatura = document.querySelector('#temperatura');
    let  pressure = document.querySelector('#pressure');
    let descr = document.querySelector('#descr');
    let humidity = document.querySelector('#humidity');
    let speed = document.querySelector('#speed');
    let deg = document.querySelector('#deg');
    btn.addEventListener('click' , () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputCityName.value+'&units=metric&APPID=5d066958a60d315387d9492393935c19')
     .then(res => res.json())
     .then(data => {console.log(data)
        cityName.innerHTML = data['name'],
        temperatura.innerHTML = data['main']['temp'],
        pressure.innerHTML = data['main']['pressure']    
        humidity.innerHTML = data['main']['humidity'],
        descr.innerHTML = data['weather'][0]['description'],
        speed.innerHTML = data['wind']['speed'],
        deg.innerHTML = data['wind']['deg']
    }
        )
     .catch(err => {
        alert("Не існує такого міста")
        
    })
    })


})