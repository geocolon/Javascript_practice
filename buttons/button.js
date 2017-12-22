var lazyBtn = document.getElementById('lazy-btn');
var lazySpan = document.getElementById('lazy-span');
var clickCount = 0;

lazyBtn.innerHTML = "Click Me Now!";
lazyBtn.style.backgroundColor = "#66CCFF";
lazySpan.style.color = "#FF0000";

lazyBtn.addEventListener('click', function(){
    clickCount++;
    lazySpan.innerHTML = "Button has been clicked " + clickCount + " times!"

    if(clickCount === 25){
        alert("YOU WIN!!!!!!!!");
    };
});
