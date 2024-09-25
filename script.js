// Option-1
// <button id="greenButton" onclick="document.body.style.backgroundColor='green'">Click me for green!</button>
// Inner HTML-inline HTML

// OPtion-2 use sometimes
function redButton() {    
    document.body.style.backgroundColor='red'
}

// Option-3.1
const yellowButton = document.getElementById('yellowButton')
yellowButton.onclick= yellowBtn;
function yellowBtn() {
    document.body.style.backgroundColor='yellow'
}

// Option-3.2
const blueBtn=document.getElementById('blueButton')
blueBtn.onclick= function(){
    document.body.style.backgroundColor='blue'
}

// Option-4.1
const purpleBtn= document.getElementById('purpleButton');
purpleBtn.addEventListener('click', purpleButton);

function purpleButton(){
 document.body.style.backgroundColor='purple'
}

// Option-4.2
const pinkBtn= document.getElementById('pinkButton');
    pinkBtn.addEventListener('click', function pinkButton(){
    document.body.style.backgroundColor='pink'
});


// Option-5 Final for most use
document.getElementById('tomatoButton').addEventListener('click', function tomatoButton(){
    document.body.style.backgroundColor='tomato';
})

