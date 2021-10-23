//===================================== DARK THEME =========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Randomized Greetings

function changeGreet(){
    const greeting = ['Hey','Konnichiwa', 'Namaste', 'Yassas', ' Hallo', ' Bonjour'];

    randomGreet = greeting[Math.floor(Math.random() * greeting.length)];

    var g = document.getElementById('greetings').innerHTML = randomGreet;
    //  greet.innerText = randomGreet;
 
       console.log("Change Greet")
 }

 // Randomized Svg
 function changeSvg(){
    const svgs = [
        'https://res.cloudinary.com/ked/image/upload/v1634830022/kedsvg/file/Web_developer_re_h7ie_tcfr5y.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830022/kedsvg/file/voice_interface_eckp_zyxxdf.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830022/kedsvg/file/programming_2svr_ocpm67.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830021/kedsvg/file/portfolio_website_lidw_p5z5nv.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830020/kedsvg/file/Mobile_app_re_catg_p95ssf.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830020/kedsvg/file/Freelancer_re_irh4_txksam.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830020/kedsvg/file/Code_thinking_re_gka2_v8wkmt.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830020/kedsvg/file/feeling_proud_qne1_ajcqym.svg',
        'https://res.cloudinary.com/ked/image/upload/v1634830020/kedsvg/file/pair_programming_njlp_j3udd9.svg'

        ];

    randomSvg = svgs[Math.floor(Math.random() * svgs.length)];

    var s = document.getElementById('homeSvg').src = randomSvg;
   
 
 }

// Randomized Theme

 function changeTheme(){
    const themeColor = ['144', '230', ' 250', ' 340'];

    randomColor = themeColor[Math.floor(Math.random() * themeColor.length)];

    var x = document.documentElement.style.setProperty('--brand-theme-color', randomColor);
    //  x.style.setProperty = randomColor;
 
       console.log("Change theme")
 }

 // Randomized Word
 function changeWords(){
    const words = [
    'Hello Am An Artificial intelligent enthusiast, an awesome UI/UX designer and a web developer . I love to Always update myself as fast as the technologies goes. am In loves with Artificial Intelligents and Machine Learning.  ',
    ' Hey Am a 3D Artist & Web developer with extensive knowledge and years of experience, bringing arts, web technologies and designing together. Delivering advanced quality works. Professionally I am a 3D artist & Smart Device engineer as well.',
   
    ' Is this your first time seeing my portfolio ? Keep Scrolling.',
    ' Hey am cool as they told me, feel free to contact me.'];

    randomWords = words[Math.floor(Math.random() * words.length)];

    var R = randomWords;
    //  x.style.setProperty = randomColor;
    responsiveVoice.speak(randomWords , "UK English Male");
 }


 function change(){
     changeWords();
     changeTheme();
     changeGreet();
     changeSvg();
     

 }

 function game(){
     const games = [
         'Call of Duty',
         'Apex',
         'cyber hunter',
         'ride out heroes'
     ];

    randomGame = games[Math.floor(Math.random() *games.length)];

    
    //  x.style.setProperty = randomColor;
    responsiveVoice.speak( 'I Love to play awesome games, one of my favourite game is ' + randomGame , "UK English Male");
 }

 function music(){
    const musics = [
        'Spotify',
        'Ganna'
    ];

   randomMusic = musics[Math.floor(Math.random() *musics.length)];

   
   //  x.style.setProperty = randomColor;
   responsiveVoice.speak( 'I Love to listen to songs alot . one of my favourite music app is ' + randomMusic , "UK English Male");
}

function code(){
    const codes = [
        'i love javascript alot. am pretty good with the language',
        'i know alot of java scripts library',
        'am thinking of improving my python skill'

    ];

   randomCode = codes[Math.floor(Math.random() *codes.length)];

   
   //  x.style.setProperty = randomColor;
   responsiveVoice.speak( 'I Love to write codes alot.' + randomCode , "UK English Male");
}

function learn(){
    const learns = [
        'am learning artificial intelligent',
        'am learning Machine learning'
    ];

   randomLearn = learns[Math.floor(Math.random() *learns.length)];

   
   //  x.style.setProperty = randomColor;
   responsiveVoice.speak( 'I Love to learn something new. currently ' + randomLearn , "UK English Male");
}


// PREVEIOSLY SELECTED TOPIC (checking from local storage)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//We need to validate if the user has previously chosen a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //ADD or remove the dark/light icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and the current icon that the user has chosen
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("THEME SETTING IS WORKING!")

//===================================== MENU SHOW Y HIDDEN =========================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ================  MENU SHOW  =============
/*  Validate if the constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 



console.log("MENU Y SETTING WORKING!")
//===================================== REMOVE MENU PRORFILE =========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // when we click on nav__links, we remove the show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Remove menu profile is working!")


//===================================== Typewriter Effect =========================


new Typewriter('#typewriter', {
  strings: ['Developer K', 'UI/UX Designer', 'Web-Developer', 'Full Stack Developer', 'Web Developer Instructor', '3D Artist', 'Smart-Phone-Engineer', 'A.I Enthusiast' , ''],
  autoStart: true,
  loop: true,
  cursor: "|"
});
console.log("Typewriter effect is working!")

//===================================== Portfolio Swiper =========================

var swiper = new Swiper(".blog-slider", {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel:{
        invert: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".blog-slider__pagination",
      clickable: true,
    },
    // mousewheel: true,
    keyboard: true,
  });
console.log("Portfolio Swiper is working!")


//===================================== SCROLL UP =========================
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll higher than 560 viewpoint /height , then the scroll up icon showld appear and on clicking should reach top of the page
    if(this.scrollY >= 560) {
        scrollup.classList.add('show-scroll');
    }
    else {
        scrollup.classList.remove('show-scroll')
    }
    console.log("Scroll up being called and working!")
}
window.addEventListener('scroll', scrollUp)

//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =========================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Section highlight working!")
}

window.addEventListener('scroll', scrollActive )


