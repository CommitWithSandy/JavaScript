// Example 6

document.getElementById("clickMeButton")
.addEventListener('click', function(){
    alert("Clicked")
})

// Example 7

document.getElementById("carList")
.addEventListener("click", function(event){
    if(event.target && event.target.matches(".carBrand")){
        alert("You Selected: " + event.target.textContent);
    }
    
});

// Example 8

document.getElementById("feedbackForm")
.addEventListener("submit", function(event){
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay")
    .textContent = `Feedback is : ${feedback}`;

})

// Example 9

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("domStatus").textContent = "DOM Fully Loaded";
});

// Example 10
document.getElementById("toggleHighlight")
.addEventListener("click", function(){
    let decriptionText = document.getElementById("descriptionText");
    decriptionText.classList.toggle("highlight")
})