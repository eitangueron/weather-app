const logic = new Logic()
const render = new Renderer()



const loadPage = function(){
    $('#saved-cities').empty()
    logic.getDataFromDB().then(savedCities => savedCities.forEach(city => render.renderData(city,'saved-cities')))
}

const handleSearch  = async function(cityName){
    await logic.getCityData(cityName)
    $('#new-cities').empty()
    logic.cityData.forEach(city => render.renderData(city,'new-cities'))
}



loadPage()
// setTimeout(function(){
//     loadPage()
// },3000)


$('#search-city-button').on('click',function () {
    handleSearch($('#city-search-input').val())
})


$('#new-cities').on('click','.save-button',function(){
    const city = $(this).closest('.city').data().id
    logic.saveCity(city)
})


$('#saved-cities').on('click','.remove-button',function(){          
    const cityName = $(this).closest('.city').data().id
    logic.removeCity(cityName)
})
