//typewriter effect
var typed = new Typed(".typewriter-text",{
    strings: ["Software Engineer", "Graphic Designer"],
    typeSpeed: 150,
    backspeed: 150,
    loop : true
})

//for navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('show'); // Toggle the 'show' class
    });

//navbar 2
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(nav => nav.classList.remove('active'));
    link.classList.add('active');
  });
});

//about page
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//google sheet form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwdfvICBbpYAfszZJKF9UdRAsHJ56Veld76RAHkaulCr8ul3sRGfLg3mXV9zOCXzoI/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
