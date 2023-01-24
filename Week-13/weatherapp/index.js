const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

 

//initialize dotenv
dotenv.config()

console.log(process.env.NODE_ENV);
console.log(process.env.WEATHER_KEY);
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    const page = req.params.page;
    const apiKey = process.env.WEATHER_KEY;
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    // https://api.openweathermap.org/data/2.5/weather?q=Rajkot&appid=b54cc6240842536ea568bfba721a59e1
    
    const apiUrl = `${url}?q=${city}&appid=${apiKey}&units=metric`
    console.log(apiUrl);
    try {
        const response = await axios.get(apiUrl);
        res.send(response.data);
      } catch (err) {
        console.log(err);
        res.status(500).send("Error getting forecast data");
      }
      });


app.get('/forecast/:city', async (req, res) => {
    const city = req.params.city;
    const lat = req.query.lat || 22.3  ;
    const lon = req.query.lon || 70.7833;
    const cnt = req.query.day || 2;
    
    const apiKey = process.env.WEATHER_KEY;
    const url = 'https://api.openweathermap.org/data/2.5/forecast/daily';
    
    //api.openweathermap.org/data/2.5/forecast/daily?lat=22.3&lon=70.7833&appid=b54cc6240842536ea568bfba721a59e1&cnt=2&mode=json

    const apiUrl = `${url}?q=${city}lat=${lat}lon=${lon}cnt=${cnt}&appid=${apiKey}&units=metric&mode=json`
    console.log(apiUrl);
    try {
        const response = await axios.get(apiUrl);
        res.send(response.data);
      } catch (err) {
        console.log(err);
        res.status(500).send("Error getting forecast data");
      }
      });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


 