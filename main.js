let main = document.querySelector(".main")
let interval
function hide() {
    let opacity = Number(window.getComputedStyle(main).getPropertyValue("opacity"))
    if (opacity < 1) {
        opacity = opacity + 0.2
        main.style.opacity = opacity
    }
    else {
        clearInterval(interval)
    }
}
window.addEventListener("load", function () {
    interval = setInterval(hide, 110)
})



let fixMenu = document.querySelector(".header")
let burgerBlock = document.querySelector(".burger__block")
let burgerBtn = document.querySelector(".burger")
let navBar = document.querySelector(".nav")
let x = false
let link = document.querySelector(".mobile__back__link")
let reservationHover = document.querySelector(".reservation__link")
window.addEventListener("scroll", function () {
    if (window.scrollY > 5) {
        fixMenu.classList.add("sticky")
        fixMenu.classList.remove("header")
    } else if (window.scrollY === 0) {
        fixMenu.classList.remove("sticky")
        fixMenu.classList.add("header")
    }
})
burgerBlock.addEventListener("click", () => {
    if (x == false) {
        navBar.classList.add('open')
        x = true
    } else if (x == true) {
        navBar.classList.remove('open')
        x = false
    }
})
navBar.addEventListener("click", (e) => {
    if (e.target.classList.contains("sub__aw")) {
        e.preventDefault()
        e.target.closest(".nav__list").classList.add("transform")
        e.target.closest(".nav__item").querySelector(".drop__down").classList.add("transform")
    }
    if (e.target.classList.contains("mobile__back__link") || e.target.classList.contains("fas")) {
        e.preventDefault()
        e.target.closest(".drop__down").classList.remove("transform")
        e.target.closest(".nav").querySelector(".nav__list").classList.remove("transform")
    }
})
let bookmark = document.querySelector(".reservation")
let popup = document.querySelector(".popup")
let popupClose = document.querySelector(".popup__close")
let overlay = document.querySelector(".overlay")
let r = true

function pop(q) {
    q.addEventListener("click", (e) => {
        e.preventDefault()
        if (r == true) {
            popup.classList.add("popup__active")
            overlay.classList.add("overlay__open")
            r = false
        } else if (r == false) {
            popup.classList.remove("popup__active")
            overlay.classList.remove("overlay__open")
            r = true
        }
    })
}
pop(bookmark)
pop(popupClose)

overlay.addEventListener("click", () => {
    if (popup.classList.contains("popup__active")) {
        popup.classList.remove("popup__active")
        overlay.classList.remove("overlay__open")
        r = true
    }
})

let subLink1 = document.querySelectorAll(".input__sub__link1")
let subLink2 = document.querySelectorAll(".input__sub__link2")
let subItem1 = document.querySelectorAll(".input__sub__item1")
let subItem2 = document.querySelectorAll(".input__sub__item2")
function list(t, s, p, m, y) {
    let u = false
    let intemList = document.querySelector(".input__block")
    intemList.addEventListener("click", (e) => {
        e.preventDefault()
        if (e.target.classList.contains(t)) {
            let subList = document.querySelector(s)
            subList.classList.toggle("block")
            y.forEach(function (elem) {
                elem.addEventListener("click", function () {
                    for (let k = 0; k < m.length; k++) {
                        let z = m[k]
                        let sub = document.querySelector(p)
                        sub.innerText = this.innerText
                        subList.classList.remove("block")
                        arrow1.classList.remove("hov")
                        arrow2.classList.remove("hov")
                    }
                })
            });
        }

    })
}
list("link1", ".value1", ".input__value1", subLink1, subItem1)
list("link2", ".value2", ".input__value2", subLink2, subItem2)


let arrow1 = document.querySelector(".input__value1")
let arrow2 = document.querySelector(".input__value2")
function arrowsWork(a) {
    a.addEventListener("click", function () {
        if (!a.classList.contains("hov")) {
            a.classList.add("hov")
        }
        else if (a.classList.contains("hov")) {
            a.classList.remove("hov")
        }

    })

}
arrowsWork(arrow1)
arrowsWork(arrow2)


let arrowbtnTop = document.querySelector(".arrow__page")
let scrollPage = document.querySelector("#link__scroll")
scrollPage.addEventListener("click", (e) => {
    e.preventDefault()
    let scrollPage = document.querySelector("#link__scroll")
    window.scrollTo({
        top: scrollPage = scrollPage.offsetTop,
        behavior: "smooth"

    })
})


let decorationLine = document.querySelector(".section__decoration__line")
let myScrollFunc = function (clas, tiv) {
    let d = clas.getBoundingClientRect().top
    tiv = clas.offsetTop
    let y = window.scrollY;
    if (y > tiv) {
        clas.style.transform = `translateY(${y * -0.2}px)`

    }
    else {
        clas.style.transform = `translateY(${y * 0.2}px)`
    }

}
console.log();
let decorationImg = document.querySelector(".section__decoration__img")
let wrapperDecorationImg = document.querySelector(".wrapper4__decoration__img")
let wrapper6Decorotion = document.querySelector(".wrapper6__decorotion")
let myScrollFunc2 = function (clas, tiv) {
    let d = clas.getBoundingClientRect()
    tiv = clas.offsetTop
    let y = window.scrollY;
    if (y > tiv) {
        clas.style.transform = `translateY(${y * 0.3}px)`

    }
    else {
        clas.style.transform = `translateY(${y * -0.3}px)`
    }
}
let myScrollFunc3 = function (clas, tiv) {
    let d = clas.getBoundingClientRect().top
    tiv = clas.offsetTop
    let y = window.scrollY;
    if (y > tiv) {
        clas.style.transform = `translateY(${y * 0.2}px)`

    }
    else {
        clas.style.transform = `translateY(${y * -0.2}px)`
    }

}
window.addEventListener("scroll", function () {
    myScrollFunc(decorationLine, 450)
    myScrollFunc2(decorationImg, 450)
    myScrollFunc3(wrapperDecorationImg, 450)
    myScrollFunc3(wrapper6Decorotion, 450)
});


let dotsBlock = document.querySelector(".wrapper5__list")
let dots = document.querySelectorAll(".wrapper5__link")
let sliders = document.querySelectorAll(".wrapper5__bg__img")
let countIndex = - 1
function showSlider() {

    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none"
        sliders[countIndex].style.display = "block"
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("wrapper5__link__active")
        dots[countIndex].classList.add("wrapper5__link__active")
        console.log(dots[countIndex]);
    }

}
let sliderLine = document.querySelectorAll(".wrapper5__page__line")
let sliderTitle = document.querySelectorAll(".wrapper5__page__title")
let sliderPar = document.querySelectorAll(".wrapper5__slider__par")
function sliderLineUnActive(item, a, b) {
    for (let l = 0; l < item.length; l++) {
        item[a].style.display = "none"
        item[b].style.display = "none"
    }
}
function sliderLineActive(item, a, b) {
    for (let l = 0; l < item.length; l++) {
        item[a].style.display = "block"
        item[b].style.display = "block"
    }
}
let numberSpan = document.querySelectorAll(".wrapper5__number__span")
for (let n = 0; n < numberSpan.length; n++) {

}

let numberSpanBlock = document.querySelector(".wrapper5__number")
dotsBlock.addEventListener("click", function (e) {
    e.preventDefault()
    for (let i = 0; i < dots.length; i++) {
        if (e.target.classList.contains("wrapper5__link") && e.target == dots[i]) {
            showSlider(countIndex = i)
            let sliderText = document.querySelectorAll(".wrapper5__page__price")
            for (let j = 0; j < sliderText.length; j++) {
                if (countIndex == 0) {
                    sliderText[0].innerText = `$${29}`
                    sliderText[1].innerText = `$${19}`
                    sliderText[2].innerText = `$${12}`
                    sliderText[3].innerText = `$${105}`
                }
                if (countIndex == 1) {
                    sliderText[0].innerText = `$${29}`
                    sliderText[1].innerText = `$${19}`
                    sliderText[2].innerText = `$${12}`
                    sliderText[3].innerText = `$${37}`
                }
                if (countIndex == 2) {
                    sliderText[0].innerText = `$${29}`
                    sliderText[1].innerText = `$${25}`
                    sliderText[2].innerText = `$${64}`
                    sliderText[3].innerText = `$${12}`
                }
                if (countIndex == 3) {
                    sliderLineUnActive(sliderLine, 2, 3)
                    sliderLineUnActive(sliderTitle, 2, 3)
                    sliderText[0].innerText = `$${29}`
                    sliderText[1].innerText = `$${25}`
                    sliderText[2].innerText = ""
                    sliderText[3].innerText = ""
                    numberSpan[2].innerText = ""
                    numberSpan[3].innerText = ""
                    numberSpanBlock.style.marginTop = 25 + 'px'
                }
                else {
                    numberSpanBlock.style.marginTop = 18 + 'px'
                    numberSpan[2].innerText = "03."
                    numberSpan[3].innerText = "04."
                    sliderLineActive(sliderLine, 2, 3)
                    sliderLineActive(sliderTitle, 2, 3)
                }
                if (countIndex == 4) {
                    sliderText[0].innerText = `$${12}`
                    sliderText[1].innerText = `$${21}`
                    sliderText[2].innerText = `$${17}`
                    sliderText[3].innerText = `$${17}`
                }
            }
            for (let r = 0; r < sliderPar.length; r++) {
                for (let k = 0; k < sliderTitle.length; k++) {
                    if (countIndex == 0) {
                        sliderTitle[0].innerText = `Soft shell crab`
                        sliderTitle[1].innerText = `Miso chicken`
                        sliderTitle[2].innerText = `Fish pie`
                        sliderTitle[3].innerText = `Salmon riverland`

                    }
                    if (countIndex == 1) {
                        sliderTitle[0].innerText = `Fried Potatoes`
                        sliderTitle[1].innerText = `Doner Burger`
                        sliderTitle[2].innerText = `Steak Filet`
                        sliderTitle[3].innerText = `Cayenne Shrimp`

                    }
                    if (countIndex == 2) {
                        sliderTitle[0].innerText = `Soft shell crab`
                        sliderTitle[1].innerText = `Tarte Tatin`
                        sliderTitle[2].innerText = `Creme Brulee`
                        sliderTitle[3].innerText = `Lemon Meringue`
                    }
                    if (countIndex == 3) {
                        sliderTitle[0].innerText = `Lobster with melted mozarella`
                        sliderTitle[1].innerText = `Butterfly fried shrimps platter`
                        sliderTitle[2].innerText = ''
                        sliderTitle[3].innerText = ''

                        sliderPar[0].innerText = `Granny help you treat yourself with a different meal everyday`
                        sliderPar[1].innerText = `Etiam tempus felis eros, id lobortis turpis`
                        sliderPar[2].innerText = ''
                        sliderPar[3].innerText = ""
                    }
                    if (countIndex == 4) {
                        sliderTitle[0].innerText = `Kiwi Coctail`
                        sliderTitle[1].innerText = `Summer Beer`
                        sliderTitle[2].innerText = 'Red Mojitos'
                        sliderTitle[3].innerText = 'Cabernet Sauvignon'
                    }
                }
            }
        }
    }
})





let sliderPage = document.querySelector(".wrapper7__slider__page")
let TextSliders = document.querySelectorAll(".wrapper7__slider")
let textSliderBtn = document.querySelectorAll(".textslider__btn")
let textSliderIndex = 0
let size = TextSliders[textSliderIndex].clientWidth
function textSliderGo() {
    sliderPage.style.transform = "translateX(" + (-size * textSliderIndex) + "px)";
}
function textSlide() {
    sliderPage.style.transition = "transform .5s ease-in-out";
    textSliderGo()
}
function btnChack() {
    if (this.id == 'prev') {
        textSliderIndex--
        if (window.matchMedia("(max-width: 1000px)").matches) {
            if (textSliderIndex < 0) {
                textSliderIndex = 2
            }
        }
        else {
            if (textSliderIndex < 0) {
                textSliderIndex = 1
            }
        }
        console.log(textSliderIndex);

    }
    if (this.id === 'next') {
        textSliderIndex++
        if (window.matchMedia("(max-width: 1000px)").matches) {
            if (textSliderIndex === 3) {
                textSliderIndex = 0
            }
        }
        else {
            if (textSliderIndex === 2) {
                textSliderIndex = 0
            }
        }
        console.log(textSliderIndex);
    }
    textSlide()
}
textSliderBtn.forEach(btn => btn.addEventListener("click", btnChack))




const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    centeredSlides: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        650: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40
        },
        1000: {
            slidesPerView: 3,
            spaceBetween: 55
        }
    }

})




let scrollToTop = document.querySelector(".scroll__to__top")
scrollToTop.addEventListener("click", (e) => {
    e.preventDefault()
    let scrollToTop = document.querySelector("#scroll__top")
    window.scrollTo({
        top: scrollToTop = scrollToTop.offsetTop,
        behavior: "smooth"

    })
})









var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'M7lc1UVf-VE',
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}
function playVideo() {
    player.playVideo();
}
function pauseVideo() {
    player.pauseVideo();
}


let videoBlcok = document.querySelector(".video__player__block")
let popupVideo = document.querySelector(".popup__video")
let popupVideoClose = document.querySelector(".video__close")
videoBlcok.addEventListener("click", () => {
    popupVideo.classList.add("activeVideo")
    overlay.classList.add("overlay__open")
    playVideo()
})
popupVideoClose.addEventListener("click", () => {
    popupVideo.classList.remove("activeVideo")
    overlay.classList.remove("overlay__open")
    pauseVideo()
})
overlay.addEventListener("click", () => {
    if (popupVideo.classList.contains("activeVideo")) {
        popupVideo.classList.remove("activeVideo")
        overlay.classList.remove("overlay__open")
        pauseVideo()
    }
})
