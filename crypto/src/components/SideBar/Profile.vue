<template>
    <div class="flex flex-row justify-start m-2">
      <div class="h-10 w-10 rounded-full">
        <img src="https://i.pravatar.cc/300" alt="avatar" class="h-10 w-12 rounded-full">
      </div>

      <div class="flex flex-row justify-between ml-3 w-3/4" >
        <div>
          <div class="text-sm font-medium text-black">
           Marc Webber
          </div>
          <div class="text-sm text-gray">
            marc@riot.ocm
          </div>  
        </div> 
        <div class="self-center mr-2">
          <Dots />
        </div>
      </div>
  </div>
</template>

<script>
import Dots from '../Addons/Dots.vue';

  export default {
    name: "Profile",
    components: { Dots }
};
</script>
