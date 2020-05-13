class Renderer{
    constructor(){
        this.source = $('#city-template').html()
        this.template = Handlebars.compile(this.source)
    }
    
    renderData(city,div){
        const newHTML = this.template(city)
        $('#'+div).append(newHTML)
    }

}

