<script setup>
import SideBar from './components/SideBar/SideBar.vue';
import Balance from './components/Main/Balance.vue';
import Summary from './components/Main/Summary.vue';
import Menu from './components/NavBar/Menu.vue';
import Search from './components/NavBar/Search.vue';
import Notifications from './components/NavBar/Notifications.vue';
import Table from './components/Table/Table.vue';
</script>

<template>
    <main class="h-full w-full bg-black font-pro text-sm flex justify-center font-[600]">
        <div class="bg-white rounded-3xl grid grid-cols-main grid-rows-main h-3/4 w-3/4 self-center">
          <SideBar class="mt-10"/>
          <Search class="
          xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-2 xl:self-center xl:m-12 
          lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3 " />
          <Notifications class="col-start-5 col-end-6 row-start-1 row-end-2 self-center justify-self-end mr-6" />
          <Menu />

          <Balance class="col-start-2 col-end-4 row-start-2 row-end-3 self-center m-10 mr-6  "/>
          <Summary class="col-start-4 col-end-7 row-start-2 row-end-3 self-center m-10 ml-6 "/>
          <Table class="col-start-2 col-end-7 row-start-3 row-end-4 m-12 mb-0" />
        </div>
    </main>
</template>

