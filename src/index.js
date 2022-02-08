import './less/index.less'

// Your code goes here!
const homeLink = document.querySelectorAll('.nav-link');
const firstPicture = document.querySelector('.intro img');
const allText = document.querySelectorAll('*');
const headerTitle = document.querySelector('h1');
const title = document.querySelector('.intro h2');
const input = document.querySelector('input');


// Mouseover and Mouseout

homeLink.forEach(link => {
    link.addEventListener('mouseover', function(evt){
        evt.target.style.color = 'red';
        link.addEventListener('mouseout', function(evt){
            evt.target.style.color = 'black';
        })
    })
})

//Keydown
function escKey(evt) {
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

document.addEventListener('keydown', escKey)

//On Load
function onLoad(){
    alert(`This is the FUNNEST WEBSITE in the World!!!! Don't loose yourself to the beauty!!!! Press 'a' or 'b' to see some magic ;)`);
}

window.addEventListener('load', (evt) => {
    onLoad();
})


//Scroll
// let last_known_scroll_position = 0;
// let ticking = false;

// function onScroll() {
//     update();
// }

// function update() {
//     for(let i = 0; i< allText.length; i++){

//     }
// }

// window.addEventListener('scroll', function(evt){
//     last_known_scroll_position = window.scrollY;
//         if(!ticking){
//             window.requestAnimationFrame(function(){
//                 onscroll(last_known_scroll_position);
//                 ticking = false;
//             });
//             ticking = true;
//         }
// })

//Select
function inputSelection(evt){
    const selection = evt.target.value.substring(evt.target.selectionStart, evt.target.selectionEnd);
}

input.addEventListener('select', inputSelection)
