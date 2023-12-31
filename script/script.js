/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  let menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- DARK AND LIGHT MODE ----- */
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader = document.getElementById("header");
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme === 'dark'){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    // Set box shadow to white when in dark mode and scrolling
    navHeader.style.boxShadow = "0 1px 6px rgba(255, 255, 255, 0.25)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
    } else{
    // Default behavior for light mode or when not scrolling
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
    }
  }if (currentTheme === 'light'){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      // Set box shadow to white when in dark mode and scrolling
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
      } else{
      // Default behavior for light mode or when not scrolling
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
      }
  } 
}


/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText",{
  strings : ['String nome = "Jhonata Batista";','nome = str("Jhonata Batista")','$nome = "Jhonata Batista";','var nome = "Jhonata Batista";','val nome = "Jhonata Batista"'],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 100,
  backDelay : 2000
})

/*let nameTypingEffect  = new Typed(".typedTextName", {
   strings : ['Jhownny'],
  loop : false,
  typeSpeed : 200, 
  backSpeed : 100,
  backDelay : 200
})*/

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})


/* -- PROJECT BOX -- */
sr.reveal('.project-container',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

/* ----- MOUSE EFFECT ----- */

window.addEventListener('scroll', scrollActive)

const blob = document.getElementById("blob");
window.onpointermove = (event) => {
    const { clientX, clientY } = event;
    blob.animate(
        {
            left: `${clientX}px`,
            top: `${clientY}px`
        },
        { duration: 100, fill: "forwards" }
    );
};
