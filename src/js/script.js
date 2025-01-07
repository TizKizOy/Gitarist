window.addEventListener('DOMContentLoaded', () =>{
    const menu = document.querySelector('.nav-menu');
    const menuItem = document.querySelectorAll('.nav-menu__list');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () =>{
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav-menu_active');
        document.getElementById("rw").style.display = "none";
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () =>{
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav-menu_active');
            document.getElementById("rw").style.display = "block";
        })
    })
})