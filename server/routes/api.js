const express= require('express')
const router = express.Router()
const axios = require('axios')
const request = require('request')
const City = require('../models/city')


const apiKey = '529a0ccf8aa2f3ad27e2a79e9362da11'


router.get('/city/:cityName',async function(req,res){
    const cityName = req.params.cityName
    const cityWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${apiKey}`)
    const iconCode = cityWeather.data.weather[0].icon
    const finalCityWeather = {
        name: cityWeather.data.name,
        temperature: Math.round(cityWeather.data.main.temp),                
        condition: cityWeather.data.weather[0].description,
        conditionPic: `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    }
    res.send(finalCityWeather)
}) 


router.get('/cities',function(req,res){
    City.find({}).then(favCities =>  res.send(favCities))
})



router.post('/city',function(req,res){
    const cityObj = req.body
    const newCity = new City({...cityObj})
    newCity.save()
    res.end()
})


// router.put('/city/:cityName',async function(req,res){
//     const cityName = req.params.cityName
//     const cityWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=Metric&appid=${apiKey}`)
//     const newCityWeather = {
//         name: cityWeather.data.name,
//         temperature: Math.round(cityWeather.data.main.temp),                
//         condition: cityWeather.data.weather[0].description,
//         conditionPic: `http://openweathermap.org/img/wn/${iconCode}@2x.png`
//     }
// })

router.delete('/city/:cityName',async function(req,res){
    const cityName = req.params.cityName
    await City.findOneAndDelete({name:cityName})
    res.end()
})



module.exports = router