const thumbNail = document.querySelector("#small-image-container");
const largeImage = document.querySelector(".large-image")

// collecting menu dom elements
const menuBtn = document.querySelector("#menu-btn");
const menuList = document.querySelector("#hambuger-menu");

 
// for cart display function
const cartOpen = document.querySelector("#cart-wrapper");
const cartBtn = document.querySelector(".cart-image")

cartBtn.addEventListener("click", ()=> {
    if (cartOpen){
        cartOpen.classList.toggle("cart-wrapper-two")
    }
})

// for mobile menu display function
menuBtn.addEventListener("click", ()=>{
    if(menuBtn){
        menuList.classList.toggle("hamburger-two")
        
    }
})

// for add to cart display di  function
const addBtn = document.querySelector(".right-button-text");
const loadedCon = document.querySelector(".loaded-cart-container");
const cartPara = document.querySelector("#cart-para");
const trashBtn = document.querySelector("#trash");

addBtn.addEventListener("click", ()=>{
    if(addBtn){
        cartPara.remove()
        loadedCon.classList.toggle("loaded-cart-container")
    }
})

trashBtn.addEventListener("click", ()=>{
    if(trashBtn){
        loadedCon.remove()
        cartPara.classList.toggle(".cart-para")
    }
})


// for counter
const plusBtn = document.querySelector(".plus-svg");
let counter = document.querySelector(".zero");

plusBtn.addEventListener("click", ()=>{
    if(plusBtn){
        counter = 1
        counter ++
    }
})
const images = [
    "image-product-1.jpg",
    "image-product-2.jpg",
    "image-product-3.jpg",
    "image-product-4.jpg"
]

for(const image of images){
    const newImage = document.createElement("img");
    newImage.setAttribute("src", `images/${image}`);
    newImage.classList.add("small-images");
    thumbNail.appendChild(newImage);
};

thumbNail.addEventListener("click", change);

function change (e){
    return largeImage.src = e.target.src
}

// collecting previous and next svg icons
// const previousBtn = document.querySelector(".previous-svg-icon");
// const nextBtn = document.querySelector(".next-svg-icon");

// // adding event handlers to both icons
// previousBtn.addEventListener("click", previousImage);
// function previousImage(){
//     if(previousBtn){
//         return largeImage.src = e.target.src
//     }
// }