import { Bar } from 'vue-chartjs'
import database from '../../firebase.js'

export default {
    extends: Bar,
    data: function () {
        return {
            datacollection: {
                labels: [],
                datasets: [{
                    label: "Total Number of each dish ",
                    backgroundColor: "#f87979",
                    data: []
                  }]
            },
            options: {
                legend: { display: false },
                title: {
                  display: true,
                  text: 'Total number of each dish'
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
      methods: {
        fetchItems: function () {
          var allOrders = {}
          database.collection('orders').get().then(querySnapShot => {
            querySnapShot.forEach(doc => { 
                var results = doc.data();
                console.log(results);
                var key;
                for (key in results) {
                  if (!(key in allOrders)) {
                    allOrders[key] = 0;
                  } else {
                    allOrders[key] = allOrders[key] + results[key];
                  }
                }
                })

                var new_key;
                for (new_key in allOrders) {
                  this.datacollection.labels.push(new_key);
                  this.datacollection.datasets[0].data.push(allOrders[new_key]);
                }
                this.renderChart(this.datacollection, this.options)
          });
        }
      },
      mounted () {
        this.fetchItems()
      }
}
