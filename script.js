const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const burgerTop = document.querySelector(".burger-top");
const burgerMiddle = document.querySelector(".burger-middle");
const burgerBottom = document.querySelector(".burger-bottom");

const header = document.querySelector(".header");

let mobileMenuActive = false;
const toggleMenu = () => {
  if (!mobileMenuActive) {
    mobileMenuActive = true;
    nav.classList.remove("translate-x-[1000px]");
    burgerTop.classList.remove("rotate-0", "origin-top-right", "w-full");
    burgerTop.classList.add("-rotate-45", "origin-top-right", "w-[45px]");

    // burgerMiddle.classList.remove('opacity-100');
    // burgerMiddle.classList.add("opacity-0");
    burgerMiddle.classList.remove("w-1/2");
    burgerMiddle.classList.add("w-0");

    burgerBottom.classList.remove("w-1/4", "rotate-0", "origin-bottom-right");
    burgerBottom.classList.add("w-[45px]", "rotate-45", "origin-bottom-right");
  } else {
    mobileMenuActive = false;
    burgerTop.classList.remove("-rotate-45", "origin-top-right", "w-[45px]");
    burgerTop.classList.add("rotate-0", "origin-top-right", "w-full");

    // burgerMiddle.classList.remove("opacity-0");
    // burgerMiddle.classList.add('opacity-100');
    burgerMiddle.classList.remove("w-0");
    burgerMiddle.classList.add("w-1/2");
    burgerBottom.classList.remove(
      "w-[45px]",
      "rotate-45",
      "origin-bottom-right"
    );
    burgerBottom.classList.add("w-1/4", "rotate-0", "origin-bottom-right");

    return nav.classList.add("translate-x-[1000px]");
  }
};

burger.addEventListener("click", toggleMenu);

// var width = window.innerWidth;
// window.addEventListener('resize', () => {
//   var width = window.innerWidth;
//   console.log(width)
// })

const changeNavBg = () => {
  if (scrollY > 140) {
    header.classList.remove("bg-transparent");
    header.classList.add("bg-white", "shadow-md");
  } else if (scrollY <= 140 && header.classList.contains("bg-white")) {
    header.classList.remove("bg-white", "shadow-md");
    header.classList.add("bg-transparent");
  }

};

document.addEventListener("scroll", changeNavBg);
document.addEventListener("resize", changeNavBg);

////// REVIEW CAROUSEL //////
const slidesContainer = document.querySelector("#slides-container");
const slide = document.querySelector(".slide");
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");

const comment = document.querySelector(".comment");
const author = document.querySelector(".author");

const reviews = [
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aliquid omnis, necessitatibus ipsum dicta sunt facilis eligendi recusandae velit mollitia autem sit architecto ipsam a aut est repellat officia eos nostrum totam possimus harum! Alias",
    author: "Becky A.",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eaque.",
    author: "Adma B.",
  },
  {
    comment:
      "Idi recusandae velit mollitia autem sit architecto ipsam a aut est repellat officia eos nostrum totam possimus harum!",
    author: "Barbara W.",
  },
];

let i = 0;

nextBtn.addEventListener("click", () => {
  slide.classList.add("-translate-x-[100%]", "opacity-0");

  if (i === reviews.length - 1) {
    i = -1;
  }
  i += 1;

  setTimeout(() => {
    slide.classList.remove("-translate-x-[100%]");
    slide.classList.add("translate-x-[100%]");
  }, 100);

  comment.textContent = reviews[i].comment;
  author.textContent = reviews[i].author;

  setTimeout(() => {
    slide.classList.remove("translate-x-[100%]", "opacity-0");
  }, 200);
});

prevBtn.addEventListener("click", () => {
  slide.classList.add("translate-x-[100%]", "opacity-0");

  if (i === 0) {
    i = reviews.length;
  }
  i -= 1;

  setTimeout(() => {
    slide.classList.remove("translate-x-[100%]");
    slide.classList.add("-translate-x-[100%]");
  }, 100);

  comment.textContent = reviews[i].comment;
  author.textContent = reviews[i].author;

  setTimeout(() => {
    slide.classList.remove("-translate-x-[100%]", "opacity-0");
  }, 200);
});
