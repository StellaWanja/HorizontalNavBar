// const showNavbar = (toggleId, navId) => {
//     const toggle = document.getElementById(toggleId);
//     const nav = document.getElementById(navId);

//     if(toggle && nav) {
//         toggle.addEventListener('click', () => {
//             nav.classList.add('show');
//         })
//     }
// }

// showNavbar('hamburger-btn', 'nav-bar')


const showNavbar = () => {

    const toggle = document.getElementById('hamburger-btn');
    const nav = document.getElementById('nav-bar');
    const body = document.getElementById('body-container');
    const header = document.getElementById('header');

    if(toggle && nav && body && header) {
        toggle.addEventListener('click', () => {
            //show navbar
            nav.classList.toggle('show');
            //change icon to x on toggle
            toggle.classList.toggle('fa-times');
            //add padding to body
            body.classList.toggle('body-padding');
             //add padding to header
            header.classList.toggle('header-padding');
        });
    }

}

showNavbar();

// change active 
const linkColor = document.querySelectorAll('.nav-link');

function colorLink () {
    if(linkColor) {
        linkColor.forEach((link) => {
            link.classList.remove('active');
            this.classList.add('active');
        })
    }
}

linkColor.forEach((link) => {
    link.addEventListener('click', colorLink);
})