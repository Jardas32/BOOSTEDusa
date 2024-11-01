let callback = function(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
           entry.target.classList.add('active');
           observer.unobserve(entry.target);
        }
    });
}

let observer =  new IntersectionObserver(callback);
let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
    observer.observe(target);
});

const slider = document.querySelector(`.slider`);
const btleft = document.querySelector(`.btleft`);
const btright = document.querySelector(`.btrigh`);

btright.addEventListener(`click`, function() {
    slider.style.scrollBehavior = `smooth`
    slider.scrollLeft += 800;
});

btleft.addEventListener(`click`, function() {
    slider.style.scrollBehavior = `smooth`
    slider.scrollLeft -= 800;
});


const goup = document.querySelector(`.goup`);

goup.addEventListener(`click`, goTop);
window.addEventListener(`scroll`, trackScroll);

function trackScroll() {

const offSet = window.pageYOffset;
const coord = document.documentElement.clientHeight;
    if(offSet > coord) {
        goup.classList.add('goupshow');
    }
    else {
        goup.classList.remove('goupshow') 
    }
};

function goTop () {
   if(window.pageYOffset > 0) {
    window.scrollBy(0, -77);
    setTimeout(goTop, 0);
   }
};

                // Форма отправки данных
                
const pinput = document.querySelector(`.pinput`);
const buttons = document.querySelector(`.buttons`);
const popbg = document.querySelector(`.popbg`);

pinput.addEventListener(`click`, function() {
    let style = getComputedStyle(popbg) 

    if(style.display === `none`) {
        popbg.style.display = `flex`
    }
});

buttons.addEventListener(`click`, function() {
    
    popbg.style.display = `none`

});





