<script>
export default {
  name: "TableButton",
  props: {
    content: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <button class="button" v-bind:style="{border: selected ? '' : 'none'}">
    {{ content }}
  </button>
</template>