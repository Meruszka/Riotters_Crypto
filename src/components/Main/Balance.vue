<script>
import Dots from '../Addons/Dots.vue';

export default {
    name: "Balance",
    props: {
        msg: String,
    },
    components: { Dots }
}
</script>


<template>
  <div class="h-3/4 card flex flex-col p-7 justify-between">
    
    <div class="flex flex-row justify-between">
      <h1 class="text-2xl text-black text-20">Current Balance</h1>
      <div class="self-center">
        <Dots />
      </div>
    </div>

    <div>
      <span class="text-gray text-5xl">$</span>
      <span class="text-5xl text-black">21 432.23</span>
      
      <div class="pt-4 flex flex-row items-center justify-start">
          <span class="flex rounded-full bg-green h-4 w-4 items-center justify-center">
            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9253 1.03013C5.845 0.994698 5.75849 0.975474 5.67074 0.973559L0.956698 0.973559C0.868792 0.973559 0.781747 0.990873 0.700532 1.02451C0.619318 1.05815 0.545524 1.10746 0.483365 1.16962C0.357829 1.29516 0.287304 1.46542 0.287304 1.64295C0.287304 1.73086 0.304618 1.8179 0.338258 1.89912C0.371899 1.98033 0.421206 2.05413 0.483365 2.11629C0.608901 2.24182 0.779164 2.31235 0.956698 2.31235L4.06325 2.30763L0.485294 5.88559C0.360269 6.01062 0.290032 6.18019 0.290032 6.357C0.290032 6.53381 0.360269 6.70338 0.485293 6.8284C0.610318 6.95343 0.779887 7.02366 0.956698 7.02366C1.13351 7.02366 1.30308 6.95343 1.4281 6.8284L5.00606 3.25044L5.00135 6.357C5.00099 6.44501 5.01806 6.53221 5.05157 6.61359C5.08508 6.69497 5.13437 6.7689 5.1966 6.83114C5.25884 6.89337 5.33277 6.94266 5.41415 6.97617C5.49553 7.00968 5.58274 7.02675 5.67074 7.02639C5.75875 7.02675 5.84596 7.00969 5.92734 6.97617C6.00871 6.94266 6.08265 6.89337 6.14488 6.83114C6.20711 6.7689 6.25641 6.69497 6.28992 6.61359C6.32343 6.53221 6.3405 6.445 6.34014 6.357L6.34014 1.64295C6.33822 1.5552 6.319 1.4687 6.28357 1.38839C6.21595 1.22648 6.08722 1.09775 5.9253 1.03013Z" fill="white"/>
            </svg>
          </span>

          <span class="text-green text-sm pl-1 self-center">
            12% vs last mounth
          </span>
        </div>
    </div>

    <div class="flex flex-row justify-start">
      <button class="bg-purple rounded-md h-small w-large text-white m-2">
        Quick Invest
      </button>
      <button class="bg-white rounded-md h-small w-large text-purple border-2 border-borderColor m-2">
        Show Report
      </button>
    </div>

  </div>
</template>
