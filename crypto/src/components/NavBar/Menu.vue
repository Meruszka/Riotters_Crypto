<script>
  import { ref } from 'vue';
  import MenuItem from './MenuItem.vue';
  export default {
    name: "SideBar",
    props: {
        msg: String,
    },
    setup() {
        const show = ref(false);
        const selected = ref([false, false, false]);
        return {
            show,
            selected
        };
    },
    methods: {
        toggle() {
            this.show = !this.show;
        },
        changeSelected(index) {
            for (let i = 0; i < this.selected.length; i++) {
                if (i == index) {
                    this.selected[i] = true;
                } else {
                    this.selected[i] = false;
                }
            }
        },
        resetSelected() {
            for (let i = 0; i < this.selected.length; i++) {
                this.selected[i] = false;
            }2
        },
    },
    components: { MenuItem }
}
</script>

<template>
  <div class="col-start-6 col-end-7 row-start-1 row-end-2 self-center justify-self-start ml-6">
    <div class="h-small w-small card justify-center flex flex-col" @click="toggle()">
      <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="self-center">
      <path d="M1.82812 1.71851H14.1719" stroke="#9896A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.82812 6.71851H14.1719" stroke="#9896A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M1.82812 11.7185H14.1719" stroke="#9896A1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>

  <div v-if="show" class="absolute top-0 right-1/3 bg-primary translate-x-1/2 p-5 rounded-md transition duration-500 ease-in-out" >
    <div @mouseover="changeSelected(0)" @mouseleave="resetSelected()">
      <MenuItem content="Logout"  :selected="this.selected[0]" />
    </div>
    <div @mouseover="changeSelected(1)" @mouseleave="resetSelected()" >
      <MenuItem content="Settings" :selected="this.selected[1]" />
    </div>
    <div @mouseover="changeSelected(2)" @mouseleave="resetSelected()" >
      <MenuItem content="Help" :selected="this.selected[2]" />
    </div>
  </div>


</template>