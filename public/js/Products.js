import {ProductItem} from "./ProductItem.js";

export const Products = {
    inject: ['getJson'],
    components: {
        ProductItem,
    },

    data() {
        return {
            products: [],
        }
    },

    mounted() {
        this.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    },
    template: `
            <ProductItem 
              v-for="el of products" 
              :key="el.id_product"
              :img="el.img"
              :product="el">
          </ProductItem>
    `
};