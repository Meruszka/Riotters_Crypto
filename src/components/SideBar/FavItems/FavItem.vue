<script>
import LineChartSimple from '../../Charts/LineChartSimple.vue';


export default {
    name: "FavItem",
    props: {
        selected: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            required: true,
        },
        short: {
            type: String,
            required: true,
        },
    },
    components: { LineChartSimple }
};

</script>


<template>
  <div class="flex flex-row justify-between my-4 h-1/2">
    <div class="flex flex-row justify-start">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15.5" fill="white" stroke="#EBEBF3"/>
      <circle cx="16" cy="16" r="10" fill="#F7931A"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1406 14.6936C20.3486 13.2926 19.2896 12.5395 17.8416 12.037L18.3113 10.1392L17.1645 9.85127L16.7072 11.6991C16.4057 11.6234 16.096 11.552 15.7883 11.4813L16.2489 9.62128L15.1027 9.33337L14.6326 11.2306C14.3831 11.1733 14.1381 11.1167 13.9003 11.0572L13.9016 11.0512L12.3199 10.6534L12.0149 11.8873C12.0149 11.8873 12.8658 12.0837 12.8478 12.0959C13.3123 12.2127 13.3963 12.5223 13.3822 12.7678L12.8472 14.9299C12.8792 14.9381 12.9207 14.9499 12.9664 14.9684L12.9275 14.9586C12.9009 14.9519 12.8733 14.9449 12.8452 14.9381L12.0952 17.9668C12.0384 18.109 11.8943 18.3222 11.5696 18.2412C11.5811 18.258 10.736 18.0316 10.736 18.0316L10.1667 19.354L11.6591 19.7288C11.8258 19.7709 11.9905 19.8141 12.1534 19.8569L12.154 19.8571C12.2623 19.8855 12.3698 19.9138 12.4767 19.9413L12.0021 21.8609L13.1477 22.1488L13.6177 20.2496C13.9306 20.3352 14.2344 20.4142 14.5317 20.4885L14.0633 22.3788L15.2101 22.6667L15.6847 20.7508C17.6404 21.1236 19.111 20.9732 19.73 19.1915C20.2287 17.7569 19.7051 16.9294 18.6762 16.3898C19.4255 16.2157 19.99 15.7192 20.1406 14.6936ZM17.5202 18.3948C17.195 19.711 15.1498 19.1668 14.214 18.9179C14.1298 18.8955 14.0546 18.8755 13.9904 18.8594L14.6202 16.3163C14.6983 16.336 14.7938 16.3575 14.9019 16.382C15.8698 16.6008 17.8533 17.0491 17.5202 18.3948ZM15.0964 15.2018C15.8766 15.4116 17.5785 15.869 17.8749 14.6728C18.1776 13.4492 16.5236 13.0804 15.7158 12.9003C15.6249 12.88 15.5447 12.8621 15.4793 12.8457L14.9083 15.1522C14.9622 15.1658 15.0255 15.1828 15.0964 15.2018Z" fill="white"/>
      </svg>
      <div class="text-xs ml-2">
        <div class="text-gray"> {{ short }}  </div>
        <div> {{ name }} </div>
      </div>
    </div> 
    <div class="place-self-stretch flex justify-center h-3/4 w-1/2">
      <LineChartSimple :name="name+'F'" :number="10" class="place-self-stretch"/>
    </div>
  </div>
</template>

