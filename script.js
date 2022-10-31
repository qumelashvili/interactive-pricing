const slider = document.querySelector(".range-input");
var toggleSlider = document.querySelector(".checkbox");
const pageViews = document.querySelector(".selected-range");
const cost = document.querySelector(".selected-range_price");
var price = 16.00;

toggleSlider.addEventListener('click', function(){
    toggleSlider.classList.toggle('active');
    if(toggleSlider.classList[1] == 'active'){
        let yearly = (price * 12 * 0.75).toFixed(2);
        cost.innerText = "$" + yearly;
    }
    else{
        cost.innerText = "$" + (price.toFixed(2))
    }
})

slider.addEventListener('input', () => 
{
    let x = (slider.value - slider.min)  / (slider.max - slider.min) * 100;
    let color = `linear-gradient(to right, hsl(174, 77%, 80%) ${x}%, hsl(174, 77%, 80%) ${x}%,
    hsl(224, 65%, 95%) ${x}%, hsl(224, 65%, 95%) ${x}%)`;
    slider.style.background = color;
    viewRanges(slider.value);
})

function viewRanges(value){
    switch(value){
        case "0":
            price = 8;
            changeRanges("10K")
            break;
        case "3": 
            price = 12;
            changeRanges("50K")
            break;
        case "6": 
            price = 16;
            changeRanges("100K")
            break;
        case "9": 
            price = 24;
            changeRanges("500K")
            break;
        case "12": 
            price = 36;
            changeRanges("1M")
            break;
    }
}

function changeRanges(pageviews){
    pageViews.innerText = pageviews;
    if(toggleSlider.classList[1] == 'active'){
        cost.innerText = `$${price * 12 * 0.75}.00`;
    }
    else{
        cost.innerText = `$${price}.00`;
    }
}