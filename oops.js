// advance javascript.
// class Humans{
//     constructor(){
//         this.name="abhishek"
//         this.age=26;
//         this.gender="male"
//     }
// }
// Humans.prototype.sanslo=function(){
//     console.log('sansh lo');
// }
// let h1=new Humans();
// let h2=new Humans();
//let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
//let apikey=`70f2592d18a7dec21aa4b94c910c14ab`;
//fetch(`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={apikey}`);
// let apikey = `70f2592d18a7dec21aa4b94c910c14ab`;
// function getWeather(city) {
//   fetch(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${apikey}`).then((raw) =>
//     raw.json()).then((res) => {
//       console.log(res);
//     })
// }
// getWeather("London");

const lat = 58.7984;
const lng = 17.8081;
const params = 'windSpeed';
async function getinfo(){

   let url=await fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
      headers: {
        'Authorization': 'b3281674-34a4-11f1-be04-0242ac120004-b328171e-34a4-11f1-be04-0242ac120004'
      }
    })
    console.log(url);
    
    let data=await url.json();
    console.log(data);
}
getinfo();
