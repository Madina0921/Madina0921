const cd1 = document.getElementById("lim1");
const cd2 = document.getElementById("lim2");
const cd3 = document.getElementById("lim3");
const cd4 = document.getElementById("lim4");
const cd5 = document.getElementById("lim5");
const bd1 = document.getElementById("circular1");
const bd2 = document.getElementById("circular2");
const bd3 = document.getElementById("circular3");
const bd4 = document.getElementById("circular4");
const bd5 = document.getElementById("circular5");
cd1.addEventListener("click", () => {
  bd1.classList.add("liPage");
  bd2.classList.remove("liPage");
  bd3.classList.remove("liPage");
  bd4.classList.remove("liPage");
  bd5.classList.remove("liPage");
});
cd2.addEventListener("click", () => {
  bd1.classList.remove("liPage");
  bd2.classList.add("liPage");
  bd3.classList.remove("liPage");
  bd4.classList.remove("liPage");
  bd5.classList.remove("liPage");
});
cd3.addEventListener("click", () => {
  bd1.classList.remove("liPage");
  bd2.classList.remove("liPage");
  bd3.classList.add("liPage");
  bd4.classList.remove("liPage");
  bd5.classList.remove("liPage");
});
cd4.addEventListener("click", () => {
  bd1.classList.remove("liPage");
  bd2.classList.remove("liPage");
  bd3.classList.remove("liPage");
  bd4.classList.add("liPage");
  bd5.classList.remove("liPage");
});
cd5.addEventListener("click", () => {
  bd1.classList.remove("liPage");
  bd2.classList.remove("liPage");
  bd3.classList.remove("liPage");
  bd4.classList.remove("liPage");
  bd5.classList.add("liPage");
});

const box1 = document.getElementById("shoe1");
const box2 = document.getElementById("newPage");
const box3 = document.getElementById("false");
box1.addEventListener("click", () => {
  box2.classList.add("newPage1");
});
box3.addEventListener("click", () => {
  box2.classList.remove("newPage1");
});

const cartsvg = document.getElementById("cart1");
const cartdiv = document.getElementById("cart2");

cartsvg.addEventListener("click", () => {
  // cartdiv.classList.toggle("cartN");
  if (cartdiv.classList.contains("cartN")) {
    cartdiv.classList.remove("cartN");
  } else {
    cartdiv.classList.add("cartN");
  }
});

let count = 0;
const nol = document.getElementById("nol");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.addEventListener("click", () => {
  if (count < 10) {
    count++;
    nol.textContent = count;
  }
});

minus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    nol.textContent = count;
  }
});

const soniya = document.getElementById("soniya");
const vaqt1 = document.querySelectorAll("#vaqt");
const bir = document.getElementById("bir");
const ikki = document.getElementById("ikki");
ikki.classList.add("none");
const ellik = document.getElementById("ellik");
const ikkiellik = document.getElementById("ikkiellik");

let son = 10;

const soniYa = () => {
  son--;
  soniya.textContent = son;
};

let vaqt = setInterval(() => {
  soniYa();
}, 1000);

setTimeout(() => {
  clearInterval(vaqt);
  bir.classList.add("none");
  ikki.classList.remove("none");
  ellik.classList.add("none");
  ikkiellik.classList.add("none");
  // vaqt1.classList.add("none");
}, 10000);

const ShopBox = document.getElementById("addtocart"),
  titleCardOld = document.querySelector("#fall"),
  btncart = document.getElementById("btncart");

btncart.addEventListener("click", () => {
  if(nol.textContent == 0){
    console.log("Salom"); 
  }else{
    let cardItem = document.createElement("div");
    cardItem.setAttribute("class", "card-item");
    //Create box item end

    let cardImg = document.createElement("img");
    let oldImg = document.getElementById("shoe11");
    cardImg.setAttribute("class", "item-img");
    cardImg.src = oldImg.src;
    cardImg.alt = "Sneaker img";

    let infoPrice = document.createElement("article");
    infoPrice.setAttribute("class", "info-price");

    //Info price uchun create qilindi yana 1 ta article

    let titleCard = document.createElement("p");
    let oldTitle = titleCardOld.textContent;
    titleCard.textContent = oldTitle;

    let infoNumbers = document.createElement("article");
    infoNumbers.setAttribute("class", "info-numbers");

    let oldPrice = document.getElementById("bir");
    let countProduct = document.getElementById("nol");

    let price = document.createElement("p");
    price.setAttribute("class", "pric");
    let change = document.createElement("p");
    let countPrice = document.createElement("p");
    let totalPrice = document.createElement("p");
    totalPrice.setAttribute("class", "total-price");

    let dollars = document.createElement("p");
    dollars.textContent = "$";

    let dollars1 = document.createElement("p");
    dollars1.textContent = "$";

    let totalCount = 0; // Savatdagi jami mahsulotlar sonini hisoblash

    // Savatchadagi mahsulotlar sonini yangilash funksiyasi
    const updateCartCount = () => {
      countDisplay.textContent = totalCount; // Yangilanayotgan sonni ko'rsatish
      countDisplay.style.display = totalCount > 0 ? "block" : "none"; // Agar son 0 bo'lsa, yashirish
    };

    let ReallyPrice = (price.textContent = oldPrice.textContent);
    let ReallyCount = (countPrice.textContent = countProduct.textContent);
    change.textContent = "x";

    let TotalPrices = ReallyCount * ReallyPrice;
    totalPrice.textContent = TotalPrices;

    let deleteCard = document.createElement("button");
    deleteCard.addEventListener("click", () => {
      cardItem.remove();
      let cardItemLength = ShopBox.querySelectorAll(".card-item").length;
      countT.textContent = cardItemLength;
      if (cardItemLength === 0) {
        cartdiv.classList.remove("cartN");
        countT.classList.add("none");
      }
    });

    deleteCard.textContent = "Delete";

    cardItem.prepend(cardImg);
    cardItem.append(infoPrice);
    cardItem.append(deleteCard);

    price.prepend(dollars1);
    totalPrice.prepend(dollars);

    infoNumbers.append(price);
    infoNumbers.append(change);
    infoNumbers.append(countPrice);
    infoNumbers.append(totalPrice);

    infoPrice.prepend(titleCard);
    infoPrice.append(infoNumbers);

    ShopBox.append(cardItem);

    let countT = document.querySelector(".hide-count");
    let cardItemLength = ShopBox.querySelectorAll(".card-item").length;
    countT.textContent = cardItemLength;
    countT.classList.remove("none");
  }

  count = 0
  nol.textContent = count
  

  
});

let countT = document.querySelector(".hide-count");
countT.classList.add("none");

//
