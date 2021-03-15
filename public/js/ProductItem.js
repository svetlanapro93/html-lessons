export const ProductItem = {
    props: ['img', 'product'],
    template: `
             <figure class="items">
                <div class="items__wrapper">
                <img :src="product.img" :alt="product.product_name" class="items-img">
                <button class="items__button">Add to Cart</button></div>
                <figcaption>
                        <h3 class="sku">{{product.product_name}}</h3>
                        <p class="price">{{product.price}}</p>
                </figcaption>
            </figure>`
};
// <div class="product-item" >
//     <img :src="img/items + product_id" :alt="product.product_name">
//     <div class="desc">
//         <h3>{{ product.product_name }}</h3>
//         <p>{{ product.price }}</p>
//     </div>
//     <button class="buy-btn" @click="$root.$refs.cart.addProduct(product)">Купить</button>
// </div>