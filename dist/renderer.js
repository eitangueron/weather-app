

class Renderer{
    constructor(){
        this.source = $('#city-template').html()
        this.template = Handlebars.compile(this.source)
        this.sunWeatherUrl = 'https://thumbs.gfycat.com/SmoothRemoteBarasinga.webp'
        this.cloudsWeatherUrl = 'https://media.giphy.com/media/qq5gwamAHVofm/giphy.gif'
        this.rainWeatherUrl = 'https://media.giphy.com/media/oSaLJmbUgZQm4/giphy.gif'
        this.stormWeatherUrl ='https://media.giphy.com/media/3osxYzIQRqN4DOEddC/giphy.gif'
        this.snowWeatherUrl = 'https://media2.giphy.com/media/Xi2Xu0MejhsUo/200w.webp?cid=ecf05e47e5bd969cf2e2fca7a5218ead39924e0d9a7a1e66&rid=200w.webp'
    }
    
    checkWeaterSituation(city){
        if(city.condition.includes('rain')){
            city['backgroundImageUrl'] = this.rainWeatherUrl
        } else if (city.condition.includes('storm')){
            city['backgroundImageUrl'] = this.stormWeatherUrl
        } else if (city.condition.includes('snow')){
            city['backgroundImageUrl'] = this.snowWeatherUrl
        } else if (city.condition.includes('clouds')){
            city['backgroundImageUrl'] = this.cloudsWeatherUrl
        } else{
            city['backgroundImageUrl'] = this.sunWeatherUrl
        }
    }

    renderData(city,div){
        this.checkWeaterSituation(city)
        const newHTML = this.template(city)
        $('#'+div).append(newHTML)
    }

}


