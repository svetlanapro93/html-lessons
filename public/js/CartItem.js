export const CartItem = {
    props: ['img', 'cartItem'],
    emits: ['remove'],
    template: `
        <div class="cart-item">
            <div class="product-desc">
                <a href="Single_Page.html"><img :src="img" class="cart-img" alt="preview"></a>
            </div>
            <div class="cart__details">
                <p><a href="Single_Page.html" class="product-title">{{cartItem.product_name}}</a></p>
                <img src="img/stars.png" alt="stars">
                <p class="product-price">$ {{cartItem.quantity*cartItem.price}}</p>
            </div>
            <button class="del-btn" @click="$emit('remove', cartItem)">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </div>`,
}
