<script>
import LineChart from '../Charts/LineChart.vue';
import Dots from '../Addons/Dots.vue';
  export default {
    name: "Summary",
    components: { LineChart, Dots }
  }
</script>


<template>
  <div class="h-3/4 card flex flex-col p-7">
    <div class="flex flex-row justify-between align-baseline">
      <h1 class="text-2xl text-black text-20">
        Summary
      </h1>
      <Dots class="self-center" />
    </div>
    <div class="w-full mt-3 h-full ">
      <LineChart name="summary" />
    </div>
  </div>
</template>