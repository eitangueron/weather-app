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

    saveCity(cityObj){
        $.post('/city',cityObj)
    }

    removeCity(cityName){
        $.ajax({
            method:'DELETE',
            url:`/city/${cityName}`
        })
    }

}

// const logic = new Logic()

// logic.getCityData('london').then(() => console.log(logic.cityData))