const inputTxt=document.querySelector('.inputTxt');
var button=document.querySelector('.btn');
const showData=document.querySelector('.showData');
const API_key="5b6aac9c8d9460c4766c2fc674acf8d5";
button.addEventListener('click',()=>{
	const cityInput=inputTxt.value;
	//console.log(cityInput);
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_key}`)
.then(res=>res.json())
.then(data=>{
	//console.log(data);
//inputTxt.value=" ";
   showData.innerHTML = `
   <ul>
   <li class="city">${data.name}</li> 
   <li class="desc">${data.weather[0].description}</li>
   <li class="temp">${data.main.temp}</li>
   </ul>`


})
});
//data.weather[0].description
// `
//                                 <ul>
//                                 <li class="city">${data.name}</li>
//                                 <li class="desc">${data.weather[0].description}</li>
//                                 <li class="temp">${data.main.temp}°C</li>
//                                 </ul>
//                                 `; 