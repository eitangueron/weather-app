const logic = new Logic()
const render = new Renderer()



const loadPage = function(){
    $('#city-weathers').empty()
    logic.getDataFromDB().then(savedCities => savedCities.forEach(city => render.renderData(city,'saved-cities')))
}

const handleSearch  = async function(cityName){
    await logic.getCityData(cityName)
    $('#new-cities').empty()
    logic.cityData.forEach(city => render.renderData(city,'new-cities'))
}



loadPage()

$('#search-city-button').on('click',function () {
    handleSearch($('#city-search-input').val())
})

$('#new-cities').on('click','.save-button',function(){
    const city = $(this).closest('.city').data()
    city['conditionPic'] = city.conditionpic
    logic.saveCity(city)
    console.log(city)
})



$('#saved-cities').on('click','.remove-button',function(){
    const cityName = $(this).closest('.city').data().name
    logic.removeCity(cityName)
    console.log(cityName)
})
