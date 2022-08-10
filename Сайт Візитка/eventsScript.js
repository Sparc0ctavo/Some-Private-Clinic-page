//TODO анімацію грацієнту при наведенні на панель навігації
const tl = gsap.timeline({defaults: {ease: Back.easeOut.config(1.7)}});

gsap.fromTo(".navStyle", {y: -60}, {y: 0, duration: 1, ease: "sine.out"});

tl.fromTo("#infoBlock1",{opacity: 0}, {x: 100, opacity: 1, duration: 1}).startTime(0.75);
tl.fromTo("#infoBlock2",{opacity: 0}, {x: -100, opacity: 1, duration: 1});

gsap.fromTo(".imageUkraine", {scale: 0.7, rotation: '-15reg'}, {scale: 1.3, rotation: '10reg', duration: 2, repeat: -1, yoyo: true});

gsap.fromTo(".mainInfoPart2", {opacity: 0}, {opacity: 1, duration: 1}).startTime(2);
gsap.fromTo(".mainRegister", {opacity: 0}, {opacity: 1, duration: 1}).startTime(3);
gsap.fromTo("footer", {opacity: 0, y: 75}, {opacity: 1, y: 0, duration: 2}).startTime(3.5);

const infoBlock1 = document.getElementById("infoBlock1");
const infoBlock2 = document.getElementById("infoBlock2");


infoBlock1.addEventListener("mouseover", () => {
    gsap.to("#infoBlock1", {scale: 1.2, duration: 0.3});
})

infoBlock1.addEventListener("mouseleave", () => {
    gsap.to("#infoBlock1", {scale: 1, duration: 0.5});
})

infoBlock2.addEventListener("mouseover", () => {
    gsap.to("#infoBlock2", {scale: 1.2, duration: 0.3});
})

infoBlock2.addEventListener("mouseleave", () => {
    gsap.to("#infoBlock2", {scale: 1, duration: 0.5});
})


