burger = document .querySelector ('.burger')
navList = document .querySelector ('.nav-list')
rightNav = document .querySelector ('.rightnav')
navbar = document .querySelector ('.navbar')

burger.addEventListener('click',()=>{
    navList.classList.toggle('v');
    rightNav.classList.toggle('v');
    navbar.classList.toggle('nav-resp');
})