const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')
const burgerTop = document.querySelector('.burger-top');
const burgerMiddle = document.querySelector(".burger-middle");
const burgerBottom = document.querySelector(".burger-bottom");

const header = document.querySelector('.header');

let mobileMenuActive = false;
const toggleMenu = () => {
    
    console.log(mobileMenuActive)
    if (!mobileMenuActive) {
        mobileMenuActive = true;
        nav.classList.remove("translate-x-[1000px]");
        burgerTop.classList.add("-rotate-45", "origin-top-right");

        // burgerMiddle.classList.remove('opacity-100');
        // burgerMiddle.classList.add("opacity-0");
        burgerMiddle.classList.remove("w-[20px]");
        burgerMiddle.classList.add("w-0");

        burgerBottom.classList.remove('w-[12px]', 'rotate-0', 'origin-bottom-right');
        burgerBottom.classList.add(
          "w-[30px]",
          "rotate-45",
          "origin-bottom-right",
        );


    } else {
        mobileMenuActive = false;
        burgerTop.classList.remove("-rotate-45", 'origin-top-right');
        burgerTop.classList.add('-rotate-0', 'origin-top-right');

        // burgerMiddle.classList.remove("opacity-0");
        // burgerMiddle.classList.add('opacity-100');
        burgerMiddle.classList.remove("w-0");
        burgerMiddle.classList.add("w-[20px]");
        burgerBottom.classList.remove(
          "w-[30px]",
          "rotate-45",
          "origin-bottom-right"
        );
        burgerBottom.classList.add(
          "w-[12px]",
          "rotate-0",
          "origin-bottom-right"
        );
        
        return nav.classList.add('translate-x-[1000px]')
    }
}

burger.addEventListener("click", toggleMenu);


const changeNavBg = () => {
  console.log(window.scrollY)
  console.log(header.classList.contains('md:bg-white/100'))
  if (window.scrollY > 140) {
    header.classList.add("md:bg-white/60", "md:backdrop-blur-lg");
  } else {
    header.classList.remove("md:bg-white/60", "md:backdrop-blur-lg");
  }
}

document.addEventListener('scroll', changeNavBg)