# Weather App

We will create backend apis using nodejs which will
take json data as input and returns json based output and will test using postman.

## API Structure

- Nodejs based apis 
- Routes 
- Controller
- Helper functions
- .env for configuartion

# Start Creating following Api's

Get all cities 
GET:
`{baseUrl}/cities`

Api which returns weather data of multiple cities .
GET:
`{baseUrl}/cities/weather`
Response will be paginated so based on request you can request data.

POST:
`{baseUrl}/weather/forcast`
Request: `days` as input
Response forcase weather response by each day


Filter the data by any particular city
POST:
`{baseUrl}/weather/forcast/city`
Request: 
- `city` as Name of a city 
- `date` as weather forcast of selected date


## Open Weather API

We will create third party integration module
using https://openweathermap.org/api that will used to fetch weather related data and will return json response that we can use in api response.



