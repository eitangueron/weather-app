class Logic{
    
    constructor(){
        this.cityData = []
    }

    async getDataFromDB(){
        const cities = await $.get('/cities')
        return cities
    }

    async getCityData(cityName){
        const cityData = await $.get(`/city/${cityName}`)
        this.cityData.push(cityData)
    }

    saveCity(cityName){
        const city = this.cityData.find(city => city.name === cityName)
        $.post('/city',city)
    }


    removeCity(cityName){
        $.ajax({
            method:'DELETE',
            url:`/city/${cityName}`
        })
    }

}
