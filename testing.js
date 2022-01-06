const products =[
    {
        id: "product1",
        name:"SAMSUNG TV",
        price:500000,
        image:"./images/product1.png"
    },

    {
        id:"product2",
        name:"Pixel 4a",
        price:250000,
        image:"./images/product2.png"
    },
    {
        id:"product3",
        name:"PS 5",
        price:300000,
        image:"./images/product3.png"
    },

    {
        id:"product4",
        name:"MacBook Air",
        price:800000,
        image:"./images/product4.png"
    },

    {
        id:"product5",
        name:"Apple Watch",
        price:95000,
        image:"./images/product5.png"
    },

    {
        id:"product6",
        name:"Air Pods",
        price:75000,
        image:"./images/product6.png"
    },
]


window.onload = ()=>{
    const gridContainer = document.querySelector('.grid-container');
    products.forEach(prod=>{
        let item = document.createElement('div');
        item.classList.add('grid-item');
        item.innerHTML=`<div class="product-image"><img src="${prod.image}" alt="product">
        <p class="price">${prod.price}</p>
        <h3 class="productName">${prod.name}</h3>
        <button class="addToCart" productId="${prod.id}">Add To Cart</button>
        </div>
        `;
        gridContainer.appendChild(item);

    });

    const cartBtns = document.querySelectorAll('.addToCart');
    cartBtns.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            let product = getProduct(btn.getAttribute('productId'));
            console.log(product.name);

        });
    })
}

function getProduct(id){
    for(let product of products){
        if(product.id === id){
            return product;
        }
    }
}












/**
   * Navbar links active state on scroll
  */
let navbarlinks = select('#navbar .nav-link', true)
const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return
        let section = select(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
        }   else {
            navbarlink.classList.remove('active')
        }
    })
}
window.addEventListener('load', navbarlinksActive)
onscroll(document, navbarlinksActive)

