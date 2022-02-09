import './less/index.less'

// Your code goes here!
const homeLink = document.querySelectorAll('.nav-link');
const firstPicture = document.querySelector('.intro img');
const allText = document.querySelectorAll('*');
const headerTitle = document.querySelector('h1');
const title = document.querySelector('.intro h2');
const input = document.querySelector('input');
const letsGoTitle = document.querySelector('.text-content')
const destinationTitle = document.querySelector('.content-destination h2')


// Mouseover and Mouseout

homeLink.forEach(link => {
    link.addEventListener('mouseover', function(evt){
        evt.target.style.color = 'red';
        link.addEventListener('mouseout', function(evt){
            evt.target.style.color = 'black';
            evt.preventDefault();
        })
    })
})

//Keydown
function pressKey(evt) {
    if(evt.key === 'a') {
        firstPicture.src = 'https://images.unsplash.com/photo-1594767059028-57f64cd78eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        headerTitle.textContent = 'Fun Europe Bus'
        title.textContent = 'Welcome To Fun Europe Bus'
    } else if(evt.key === 'b') {
        firstPicture.src = 'http://localhost:9000/img/fun-bus.jpg'
        headerTitle.textContent = 'Fun Bus'
        title.textContent = 'Welcome To Fun Bus'
    }
}

document.addEventListener('keydown', pressKey)

//On Load
function onLoad(){
    alert(`This is the FUNNEST WEBSITE in the World!!!! Don't loose yourself to the beauty!!!! Press 'a' or 'b' to see some magic ;)`);
}

window.addEventListener('load', (evt) => {
    onLoad();
})

//click

function colorWords(evt) {
    evt.target.style.color = 'orange';
}

letsGoTitle.addEventListener('click', colorWords)
headerTitle.addEventListener('click', colorWords);
destinationTitle.addEventListener('click', colorWords)

// function 