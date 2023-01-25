<script>
import FavItem from "./FavItems/FavItem.vue";
import Dots from "../Addons/Dots.vue";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Fav",
  components: { FavItem, Dots },
  setup(){
    const store = useStore();
    if (store.state.crypto.fav.length === 0) {
      store.dispatch("crypto/getFavCryptos");
    }
    const data = computed(() => store.state.crypto.fav);
    return {
      data 
    };
  }
};
</script>

<template>
  <div class="p-2 border-t-2 border-gray flex flex-col ml-2 mr-2 mt-2">
    <div class="flex flex-row justify-between mt-5 mb-5">
      <div>
        Favorites
      </div>
      <div class="self-center">
        <Dots />
      </div>
    </div>
    <FavItem v-for="item in data" :key="item.id" :name="item.name" :short="item.symbol"/>
  </div>
</template>
