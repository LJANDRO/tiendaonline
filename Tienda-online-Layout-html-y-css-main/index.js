const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
})

/* =========================================*/

const cartInfo = document.querySelector('.cart-product');
 const rowProduct = document.querySelector('.row-product');

 // lista de los contenedores de productos // 
const productsList = document.querySelector('.container-items');

// variable de arreglo de productos //
let allproducts = [];
const valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');







productsList.addEventListener('click', e => {

    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const exits = allproducts.some(
            product => product.title === infoProduct.title
        );

        if (exits){
            const products = allproducts.map(product => {
                if (product.title === infoproduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allproducts = [...products];
        }else {
            allproducts = [...allproducts, infoProduct];
        }
       
        showHTML();
    };

});

// funcion para mostrar html//
const showHTML = () => {

    //limpiar HTML//
    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;
    
    allproducts.forEach(product => {
    const containerCartProducts = document.createElement('div')
    containerPruduct.classList.add('cart-product')

    containerPruduct.innerHTML = `
         <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">${product.price}</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="icon-close"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
    
    `;

    rowProduct.append(containerPruduct);
    total = total + parseInt(product.quantity * product.price).slice(1);
    totalOfProducts = totalOfProducts + products.quantity;
    });
    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
};
