//navbar fixed
window.onscroll = function() {
    const header  = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }
    else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('fle')
        toTop.classList.add('hidden')
    }
}

// hamburger

const hamburger = document.querySelector('#hamburger');
const navmenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navmenu.classList.toggle('hidden');
});

//klik di luar hamburger

window.addEventListener('click', function(e) {
    if(e.target != hamburger && navmenu){
        hamburger.classList.remove('hamburger-active');
        navmenu.classList.add('hidden');
    }
});

//darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    };
});

//simpan posisi toggle sesuai tema
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }