const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '069ce6c824msh67e820f9fc66c1bp1a91a3jsnd12c87d7879d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city)=>{
	cityName.innerHTML = city
	
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
		console.log(response)
		 feels_like.innerHTML = response.feels_like
		 cloud_pct.innerHTML = response.cloud_pct
		 temp.innerHTML = response.temp

	 })
	
	.catch(err => console.error(err));

}
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Kolkata")