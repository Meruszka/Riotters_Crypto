<script>
export default {
  name: 'SideBarItem',
  props: {
    msg: String,
    content: {
      type: String,
      required: true,
    },
    news: {
      type: Number,
      required: false,
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
      <div v-if="news" class="inline-block bg-red rounded-full text-white text-xs font-bold px-2 py-1 ml-2">
        {{ news > 9 ? '9+' : news }}
      </div>  
    </div>
</template>