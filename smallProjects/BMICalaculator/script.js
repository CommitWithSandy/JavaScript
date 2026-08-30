const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')


    if (height === ''|| height < 0 || isNaN(height)) {
        result.innerHTML = "Please give a valid Height"
    }else if (weight === ''|| weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please give a valid Weight"
    }else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        //show result
        result.innerHTML = `<span>${bmi}</span>` 
    if(bmi <= 18.9){
        result.innerHTML = `Under Weight ${bmi}`
    }
    else if (bmi <=24.9){
        result.innerHTML = `Normal ${bmi}`
    }else{
        result.innerHTML = `OverWeight ${bmi}`
    }
}
})