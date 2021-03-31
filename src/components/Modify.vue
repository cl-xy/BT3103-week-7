<template>
    <div>
        <ul>
            <li v-for= "(count, food, index) in datapacket" v-bind:key = "food">
            <br>
            {{ food }} : {{ count }}
            <input type = "number" v-bind:id = "index" placeholder = 0 min = "0"/>
            </li>
        </ul>
        <button v-on:click = "updateOrder()">Update Order</button>
    </div>
</template>

<script>
import database from '../firebase.js'

export default {
    data() {
        return {
            datapacket: {},
        }
    }, 
    methods: {
        fetchItems: function() {
            database.collection('orders').doc(this.$route.params.id).get().then(snapshot => {
                this.datapacket = snapshot.data();
            })  
        },
        updateOrder: function() {
            let new_datapacket = this.datapacket
            for (let i = 0; i < 6; i++) {
                if (document.getElementById(i).value.length != 0) {
                    var food = Object.keys(this.datapacket)[i];
                    var new_amt = Number(document.getElementById(i).value);
                    new_datapacket[food] = new_amt;
                }
            }
            database.collection('orders').doc(this.$route.params.id).update(new_datapacket).then(() => {this.$router.push('orders')});
        }
    },
    created() {
        this.fetchItems();
    }
}
</script>
<style scoped>
</style>
