import {Cart} from "./Cart.js";
import {Products} from "./Products.js";
import {ProductItem} from "./ProductItem.js";
import {CartItem} from "./CartItem.js";

const App = {
    components: {
        Cart,
        Products,
    },
    data() {
        return {
        }
    },
    provide() {
        return {
            getJson: this.getJson,
            putJson: this.putJson,
            postJson: this.postJson
        }
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => console.log(`Обработчик: ${error}`))
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => console.log(`Обработчик: ${error}`))
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => console.log(`Обработчик: ${error}`))
        }
    },
}

Vue.createApp(App).mount('#app');