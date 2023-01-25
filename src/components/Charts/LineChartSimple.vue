<script>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue';
  export default {
    name: "LineChartSimple",
    props: {
      name: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        default: 15,
      },
    },
    setup(props) {
      const n = props.number;
      const d = [...Array(n).keys()].map(() => Math.random() * 100);
      const data = {
        labels: [...Array(n).keys()],
        datasets: [{
          data: d,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      };

      const config = {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
            y: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
          elements: {
            point: {
              radius: 0,
            },
          },
          maintainAspectRatio: false,
        }
      };
      onMounted(() => {
        const ctx = document.getElementById(props.name);
        const myChart = new Chart(ctx, config);
      })
    }
  }
</script>


<template>
  <canvas :id="name"></canvas>
</template>
