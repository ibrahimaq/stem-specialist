const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav')

let mobileMenuActive = false;
const toggleMenu = () => {
    
    console.log(mobileMenuActive)
    if (!mobileMenuActive) {
        mobileMenuActive = true;
        return nav.classList.remove('translate-x-[1000px]')
    } else {
        mobileMenuActive = false;
        return nav.classList.add('translate-x-[1000px]')
    }
}

burger.addEventListener('click', toggleMenu);