<script>
export default {
  name: 'MenuItem',
  props: {
    msg: String,
    content: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  
}
</script>

<template>
    <div class="flex flex-row justify-between w-full"> 
      <div v-bind:style="{ color: selected ? 'black' : '#9896A1' }" class="flex flex-row">
        {{ content }}
      </div>
    </div>
</template>