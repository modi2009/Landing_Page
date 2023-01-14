/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const nav_bar = document.getElementById('navbar__list');

/*
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const build_nav = function(){
    sections.forEach(function(section){
        const nav_li = document.createElement('li')
        nav_li.innerHTML = `<a class='menu__link' href='#${section.id}'>${section.dataset.nav}</a>`;
        nav_bar.appendChild(nav_li);
    })

};
                     

/**
 * End Main Functions
 * Begin Events
 
*/



// Build menu 
build_nav();
// Scroll to section on link click
// Set sections as active
//document.addEventListener('scroll', addClassActive);
document.addEventListener('scroll',() =>{
    let in_view_section = '';
    sections.forEach(section =>{
        const section_top = section.offsetTop;
        const section_height = section.offsetHeight;
        if(pageYOffset >= section_top){
            in_view_section = section.getAttribute('id');
        }
    })
    console.log(in_view_section);
    sections.forEach(section =>{
        section.classList.remove('your-active-class');
        if(section.classList.contains(in_view_section)){
            section.classList.add('your-active-class');
        }
    })
    })


document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const current_id = e.target.attributes.href.value;
        const section_to = document.querySelector(current_id);

        section_to.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

