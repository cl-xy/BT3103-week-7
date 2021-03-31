import { Line } from 'vue-chartjs'
import axios from 'axios'

export default {
  extends: Line,
  data: function () {
    return {
        results: [],
        datacollection: {
            labels: [],
            datasets: [{label: "something",
                data: [],
                fill: false
            }, 
            {label: "something", 
            data: [], 
            fill: false}, 
            {label: "something",
            data: [],
            fill: false}, 
            {label: "something",
            data: [],
            fill: false},
            {label: "something",
                data: [],
                fill: false
            }]
        },
        options: {
            legend: { display: false },
            title: {
              display: true,
              text: 'PSI Twenty Four Hourly (By region)'
            },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  methods: {
    fetchItems: function () {
        var final_obj = {};
        axios.get(`https://api.data.gov.sg/v1/environment/psi?date=2021-02-23`)
        .then(response => {
            response.data.items.forEach(data => {
                var all_psi = data.readings.psi_twenty_four_hourly;
                this.datacollection.labels.push(data.timestamp);
                for (let index in all_psi) {
                    if (!(index in final_obj)) {
                        final_obj[index] = [];
                    } else {
                        final_obj[index].push(all_psi[index])
                    }
                }
            })
            var new_index = 0;
            for (let key in final_obj) {
                this.datacollection.datasets[new_index].label = key;
                this.datacollection.datasets[new_index].data = final_obj[key];
                new_index += 1;
            }
        })
        this.renderChart(this.datacollection, this.options)
        }
    },
    mounted () {
        this.fetchItems()
    }
}