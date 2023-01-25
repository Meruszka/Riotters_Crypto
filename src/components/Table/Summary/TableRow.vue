<script>

import Change from './Change.vue';
import Chart from '../../Charts/LineChartSimple.vue';

  export default {
    name: "TableRow",
    props: {
        name: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        change: {
            type: Number,
            required: true,
        }
    },
    components: { Change, Chart }
};
</script>

<template>
  <div class="mt-5 flex flex-row justify-between bg-white p-3 rounded-lg border-2 border-borderColor h-1/4">
    <div class="flex flex-row justify-start w-1/5 self-center">
        <div class="self-center flex justify-center align-middle border-2 border-borderColor p-1 rounded-full">
          <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="bitcoin" class="w-8 h-8" />
        </div>
        <div class="flex flex-col ml-2">
          <div class="text-sm text-gray">{{ short }}</div>
          <div class="text-sm font-bold">{{ name }}</div>
        </div>
    </div>

    <div class="flex flex-col w-1/5 self-center">
      <div class="flex flex-col">
        <div class="text-sm text-gray">Price</div>
        <div class="text-sm text-black">{{ price }}</div>
      </div>  
    </div>

    <div class="flex flex-col w-1/5 self-center">
      <div class="text-sm text-gray">Change</div>
      <Change :change="change" />
    </div>

    <div class="w-1/5 h-1/2 flex justify-center self-center " >
      <Chart :name="name"/>
    </div>

    <div class="flex flex-row w-1/5 self-center justify-end">
      <button class="bg-primary text-purple rounded-md p-2 h-10 w-mid">Sell</button>
      <button class="bg-purple text-white rounded-md p-2 h-10 w-mid">Buy</button>
    </div>
  </div>
</template>