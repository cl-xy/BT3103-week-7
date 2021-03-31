<template>
    <div id = "basket">
        Menu:
            <ul id="itemsSelected">
                <li v-for = "items in itemsSelected" v-bind:key = "items">
                {{items[0]}} x {{items[1]}}
                </li>
            </ul>
            <br>
            <button id = "button1" v-on:click = "findTotal(); sendOrder();"> Calculate total </button>
            <p v-show ="display">
            Subtotal: ${{subTotal}} <br>
            Grand Total: ${{grandTotal}}
            </p>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    name: 'Basket',
    props: ['itemsSelected'], 
    data() {
        return {
            subTotal: 0,
            display: false,
            currentOrder: {
                'Prawn omelette': 0,
                'Dry Beef Hor Fun': 0,
                'Sambal KangKung': 0,
                'Pork Fried Rice': 0,
                'Mapo Tofu': 0,
                'Cereal Prawn': 0
            }
        }
    },
    methods: {
        findTotal: function() {
            for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                const curr_quantity = curr_item[1];
                const curr_price = curr_item[2];
                this.subTotal += curr_quantity * curr_price;
            }
            this.display = true;
        },
        makeOrder: function() {
            for (let i = 0; i < this.itemsSelected.length; i++) {
                const curr_item = this.itemsSelected[i];
                var item_name = curr_item[0];
                var item_count = curr_item[1];
                this.currentOrder[item_name] = item_count;
            }
        },
        sendOrder: function() {
            this.makeOrder();
            database.collection('orders').add(this.currentOrder)
            .then(() => {location.reload()});
        }
    },
    computed: {
        grandTotal: function() {
            return (this.subTotal * 1.07).toFixed(2);
        }
    }
}
</script>

<style scoped>
    #button1 {
        border-radius: 8px;
        background-color: pink;
    }
    basket {
        font-size: 20px;
    }
</style>