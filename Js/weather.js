
const apiKey = '8220fed63641b31dff665b5334793302';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weathericon');
const body = document.querySelector('body');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        alert('Entered Unknown City')
    }
    else{
        var data = await response.json();
        console.log(data);


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp)+ '&deg;C';

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/FORUSE/cloud.png";
        body.style.backgroundImage = 'url(../images/clouds.jpg)'   
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/FORUSE/sun.png"   
        body.style.backgroundImage = 'url(../images/sunny.jpg)'   
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/FORUSE/rainfall.jpg"   
        body.style.backgroundImage = 'url(../images/rain1.jpg)' 
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/FORUSE/drizzle.png"  
        body.style.backgroundImage = 'url(../images/drizzleb.jpg)' 
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/FORUSE/mist.png"   
        body.style.backgroundImage = 'url(../images/Misty.jpg)'
    }
   
    }
    
    
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})

// kigali city

const apiUrl1 = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kigali,250&appid=8220fed63641b31dff665b5334793302';

const weatherIcon2 = document.querySelector('.weathericon2')

async function checkWeather1() {
    const response = await fetch(apiUrl1);

   
    var data1 = await response.json();
    console.log(data1);


    document.querySelector('.temp2').innerHTML =Math.round(data1.main.temp)  + '&deg;C';
    document.querySelector('.humidity').innerHTML = data1.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data1.wind.speed + 'KM/H';

    if (data1.weather[0].main == "Clouds") {
        weatherIcon2.src = "images/FORUSE/cloud.png"   
    }
    else if (data1.weather[0].main == "Clear") {
        weatherIcon2.src = "images/FORUSE/sun.png"   
    }
    else if (data1.weather[0].main == "Rain") {
        weatherIcon2.src = "images/FORUSE/rainfall.jpg"   
    }
    else if (data1.weather[0].main == "Drizzle") {
        weatherIcon2.src = "images/FORUSE/drizzle.png"   
    }
    else if (data1.weather[0].main == "Mist") {
        weatherIcon2.src = "images/FORUSE/mist.png"   
    }
   
    }
    checkWeather1();
   
// kigali city

// Eastern province

const apiUrl2 = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=kayonza,250&appid=8220fed63641b31dff665b5334793302';

const weatherIcon3 = document.querySelector('.weathericon3')

async function checkWeather2() {
    const response = await fetch(apiUrl2);

   
    var data2 = await response.json();
    console.log(data2);


    document.querySelector('.temp3').innerHTML =Math.round(data2.main.temp)  + '&deg;C';
    document.querySelector('.humidity1').innerHTML = data2.main.humidity + '%';
    document.querySelector('.wind1').innerHTML = data2.wind.speed + 'KM/H';

    if (data2.weather[0].main == "Clouds") {
        weatherIcon3.src = "images/FORUSE/cloud.png"   
    }
    else if (data2.weather[0].main == "Clear") {
        weatherIcon3.src = "images/FORUSE/sun.png"   
    }
    else if (data2.weather[0].main == "Rain") {
        weatherIcon3.src = "images/FORUSE/rainfall.jpg"   
    }
    else if (data2.weather[0].main == "Drizzle") {
        weatherIcon3.src = "images/FORUSE/drizzle.png"   
    }
    else if (data2.weather[0].main == "Mist") {
        weatherIcon3.src = "images/FORUSE/mist.png"   
    }
   
    }
    checkWeather2();
   
// Eastern Province

// Western province

const apiUrl3 = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=gisenyi,250&appid=8220fed63641b31dff665b5334793302';

const weatherIcon4 = document.querySelector('.weathericon4')

async function checkWeather3() {
    const response = await fetch(apiUrl3);

   
    var data3 = await response.json();
    console.log(data3);


    document.querySelector('.temp4').innerHTML =Math.round(data3.main.temp)  + '&deg;C';
    document.querySelector('.humidity3').innerHTML = data3.main.humidity + '%';
    document.querySelector('.wind3').innerHTML = data3.wind.speed + 'KM/H';

    if (data3.weather[0].main == "Clouds") {
        weatherIcon4.src = "images/FORUSE/cloud.png"   
    }
    else if (data3.weather[0].main == "Clear") {
        weatherIcon4.src = "images/FORUSE/sun.png"   
    }
    else if (data3.weather[0].main == "Rain") {
        weatherIcon4.src = "images/FORUSE/rainfall.jpg"   
    }
    else if (data3.weather[0].main == "Drizzle") {
        weatherIcon4.src = "images/FORUSE/drizzle.png"   
    }
    else if (data3.weather[0].main == "Mist") {
        weatherIcon4.src = "images/FORUSE/mist.png"   
    }
   
    }
    checkWeather3();
   
// Western Province

// Nortern province

const apiUrl4 = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=musanze,250&appid=8220fed63641b31dff665b5334793302';

const weatherIcon5 = document.querySelector('.weathericon5')

async function checkWeather4() {
    const response = await fetch(apiUrl4);

   
    var data4 = await response.json();
    console.log(data4);


    document.querySelector('.temp5').innerHTML =Math.round(data4.main.temp)  + '&deg;C';
    document.querySelector('.humidity3').innerHTML = data4.main.humidity + '%';
    document.querySelector('.wind3').innerHTML = data4.wind.speed + 'KM/H';

    if (data4.weather[0].main == "Clouds") {
        weatherIcon5.src = "images/FORUSE/cloud.png"   
    }
    else if (data4.weather[0].main == "Clear") {
        weatherIcon5.src = "images/FORUSE/sun.png"   
    }
    else if (data4.weather[0].main == "Rain") {
        weatherIcon5.src = "images/FORUSE/rainfall.jpg"   
    }
    else if (data4.weather[0].main == "Drizzle") {
        weatherIcon5.src = "images/FORUSE/drizzle.png"   
    }
    else if (data4.weather[0].main == "Mist") {
        weatherIcon5.src = "images/FORUSE/mist.png"   
    }
   
    }
    checkWeather4();
   
// northern Province

// southern province

const apiUrl5 = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=huye,250&appid=8220fed63641b31dff665b5334793302';

const weatherIcon6 = document.querySelector('.weathericon6')

async function checkWeather5() {
    const response = await fetch(apiUrl5);

   
    var data5 = await response.json();
    console.log(data5);


    document.querySelector('.temp6').innerHTML =Math.round(data5.main.temp)  + '&deg;C';
    document.querySelector('.humidity4').innerHTML = data5.main.humidity + '%';
    document.querySelector('.wind4').innerHTML = data5.wind.speed + 'KM/H';

    if (data5.weather[0].main == "Clouds") {
        weatherIcon6.src = "images/FORUSE/cloud.png"   
    }
    else if (data5.weather[0].main == "Clear") {
        weatherIcon6.src = "images/FORUSE/sun.png"   
    }
    else if (data5.weather[0].main == "Rain") {
        weatherIcon6.src = "images/FORUSE/rainfall.jpg"   
    }
    else if (data5.weather[0].main == "Drizzle") {
        weatherIcon6.src = "images/FORUSE/drizzle.png"   
    }
    else if (data5.weather[0].main == "Mist") {
        weatherIcon6.src = "images/FORUSE/mist.png"   
    }
   
    }
    checkWeather5();
   
// southern Province


 


    