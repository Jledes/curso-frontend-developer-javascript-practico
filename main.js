/* donde doy click */
const menuEmail = document.querySelector('.navbar-email');
const menuMobile = document.querySelector('.menu');
const menuCarritoIcono = document.querySelector('.navbar-shopping-cart');

/* elemnto que quiero aparecer o desaparecer */
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const asideCarrito = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');


/* escuchar */
menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', toggleMobileMenu);
menuCarritoIcono.addEventListener('click', toggleCarritoIcono);


function toggleDesktopMenu() {

    const menuOpen = asideCarrito.classList.contains('inactive');

    if (!menuOpen) {
        asideCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');    
}
function toggleMobileMenu() {
    const menuOpen = asideCarrito.classList.contains('inactive');

    if (!menuOpen) {
        asideCarrito.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');    
}
function toggleCarritoIcono() {

    const menuOpen = mobileMenu.classList.contains('inactive');
    const menuOpenDesktop = desktopMenu.classList.contains('inactive');

    if (!menuOpen || !menuOpenDesktop) {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    asideCarrito.classList.toggle('inactive');    
}


const listProduct = [];

listProduct.push({
    name: 'Base',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

listProduct.push({
    name: 'Base',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

listProduct.push({
    name: 'Base',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

listProduct.push({
    name: 'Base',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

console.log(listProduct);

listProductCard(listProduct);

function listProductCard(arr) {    


for (const product of arr) {

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);

    productCard.appendChild(imgProduct);

    const productCardInfo = document.createElement('div');
    productCardInfo.classList.add('product-info');

    productCard.appendChild(productCardInfo);
    
    const productCardDetail = document.createElement('div');

    const detailPrice = document.createElement('p');
    detailPrice.innerText = '$'+ product.price;
    const detailName = document.createElement('p');
    detailName.innerText = product.name;

    

    productCardDetail.appendChild(detailPrice);
    productCardDetail.appendChild(detailName);

    productCardInfo.appendChild(productCardDetail);



    const productCarrito = document.createElement('figure');
    const imagenCarrito = document.createElement('img');
    imagenCarrito.setAttribute('src', './icons/bt_add_to_cart.svg' );  

    productCarrito.appendChild(imagenCarrito);
    productCardInfo.appendChild(productCarrito);

    cardsContainer.appendChild(productCard);
    
}
}
