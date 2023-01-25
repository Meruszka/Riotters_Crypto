<script>
import Chart from 'chart.js/auto'
import { onMounted } from 'vue';
  export default {
    name: "LineChart",
    props: {
      name: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const n = 15;
      const d1 = [...Array(n).keys()].map(() => Math.random() * 30);
      const d2 = [...Array(n).keys()].map(() => Math.random() * 30);
      const data = {
        labels: [...Array(Math.floor(n/3)).keys()],
        datasets: [{
          label: 'last month',
          data: d1,
          fill: false,
          borderColor: 'gray',
          backgroundColor: 'gray',
          tension: 0.1
        },
        {
          label: 'this month',
          data: d2,
          fill: false,
          borderColor: 'rgb(116	69	251)',
          backgroundColor: 'rgb(116	69	251)',
          tension: 0.1
        }]
      };

      const config = {
        type: 'line',
        data: data,
        options: {
          elements: {
            point: {
              radius: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: true,
              useBorderRadius: true,
              position: 'bottom',
              borderRadius: 10,
              boxWidth: 10,
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
              },
              ticks: {
                color: 'gray',
                font: {
                  size: 10,
                },
              },
            },
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: 'gray',
                font: {
                  size: 10,
                },
              },
            },
          },
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
  <canvas :id="name" class="h-3/4 w-3/4"></canvas>
</template>
