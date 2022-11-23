//DOM ELEMENTS 

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

//show the time

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    
    //SET AM or PM

    const amPm = hour >= 12 ? 'PM' : 'AM';

    //12 HR format
    hour = hour % 12 || 12;

    //output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);

}
//add the zero in single digit seconds
function addZero(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;

}
//Set background and greeting
function setBgGreet() {
    let today = new Date(), 
        hour = today.getHours();

    if(hour < 12 ){
        //morning
        document.body.style.backgroundImage = "url('./img/backgroundMorning.jpg')";
        greeting.textContent= 'Good Morning';
        document.body.style.color = 'white';


    } else if(hour < 18) {
        //afternoon
        document.body.style.backgroundImage = "url('./img/backgroundMorning.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';


    } else {
        //night
        document.body.style.backgroundImage = "url('./img/backgroundNight.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}


//get name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }

    } else {
        localStorage.setItem('name', e.target.innerText);
    }
    
}

function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

//set focus
function setFocus(e) {
    if(e.type === 'keypress') {
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }

    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
    
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);



//RUN THE TIME 
showTime();
setBgGreet();
getName();
getFocus();
