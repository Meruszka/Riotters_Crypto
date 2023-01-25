<script>
import { ref } from 'vue';
import Positive from './Icons/Positive.vue';
import Negative from './Icons/Negative.vue';

export default {
    name: "Change",
    props: {
        change: {
            type: Number,
            required: true,
        },
    },
    setup(props) {
        let color = ref("black");
        let positive = ref(false);
        if (props.change > 0) {
            color = "green";
            positive = true;
        }
        else if (props.change < 0) {
            color = "red";
            positive = false;
        }
        else {
            color = "black";
        }
        return { color, positive };
    },
    components: { Positive, Negative }
}
</script>

<template>
  <div class="text-sm flex flex-row" v-bind:style="{color: this.color}">
  {{ change }}
  <Positive v-if="positive" class="self-center ml-1" />
  <Negative v-else class="self-center ml-1" />
  </div>
</template>