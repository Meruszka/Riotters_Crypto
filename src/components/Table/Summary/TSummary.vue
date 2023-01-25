<script>
import TableRow from "./TableRow.vue";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "TSummary",
  components: { TableRow },
  setup(){
    const store = useStore();
    if (store.state.crypto.all.length === 0) {
      store.dispatch("crypto/getAllCryptos");
    }
    const data = computed(() => store.state.crypto.all);
    return {
      data 
    };
  }
};
</script>

<template>
  <div class="overflow-y-scroll">
    <TableRow v-for="item in data" :key="item.id" :name="item.name" :short="item.symbol" :price="item.quote.USD.price" :change="item.quote.USD.percent_change_7d" />
  </div>
</template>