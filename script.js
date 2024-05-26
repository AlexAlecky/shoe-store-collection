const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 199,
    colors: [
      {
        code: "black",
        img: "images/air.png"
      },
      {
        code: "darkblue",
        img: "images/air2.png",
      }
    ],
  },
  {
    id: 2,
    title: "Jordan",
    price: 149,
    colors: [
      {
        code: "black",
        img: "images/jordan.png"
      },
      {
        code: "green",
        img: "images/jordan2.png",
      }
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 250,
    colors: [
      {
        code: "white",
        img: "images/blazer.png"
      },
      {
        code: "green",
        img: "images/blazer2.png",
      }
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 103,
    colors: [
      {
        code: "black",
        img: "images/crater.png"
      },
      {
        code: "white",
        img: "images/crater2.png",
      }
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 200,
    colors: [
      {
        code: "white",
        img: "images/hippie.png"
      },
      {
        code: "black",
        img: "images/hippie2.png",
      }
    ],
  },
]

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductName = document.querySelector(".productName");
const currentProductCost = document.querySelector(".productCost");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((menuItem, index) => {
  menuItem.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    chosenProduct = products[index]

    //change text of current product

    currentProductName.textContent = chosenProduct.title;
    currentProductCost.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.colors[0].img

    //Adding new color
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code

    })
  })
})

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white"
      size.style.color = "black"
    })
    size.style.backgroundColor = "black"
    size.style.color = "white"
  })
})

const productBtnEl = document.querySelector(".productBtn");
const paymentEl = document.querySelector(".payment");
const closeBtn = document.querySelector(".close");

productBtnEl.addEventListener("click", () => {
  paymentEl.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  paymentEl.style.display = "none";
})

