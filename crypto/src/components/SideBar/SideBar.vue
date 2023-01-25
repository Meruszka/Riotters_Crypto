<script>
    import { ref } from 'vue';
    import SideBarItem from './SideBarItem.vue';
    import Fav from './Fav.vue';
    import Overview from './Icons/Overview.vue';
    import BuySell from './Icons/BuySell.vue';
    import Wallet from './Icons/Wallet.vue';
    import Bundles from './Icons/Bundles.vue';
    import Reporting from './Icons/Reporting.vue';
    import Community from './Icons/Community.vue';
import Profile from './Profile.vue';


  export default {
    name: "SideBar",
    props: {
        msg: String,
    },
    setup() {
        const selected = ref([false, false, false, false, false, false]);
        return { selected };
    },
    methods: {
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
        }
    },
    components: { SideBarItem, Overview, BuySell, Wallet, Bundles, Reporting, Community, Fav, Profile },
    mounted() {
        
    }
}
</script>

<template>
    <div class="row-start-1 row-end-2 col-start-1 col-end-2 flex justify-center bg-primary ml-2 mt-2">
        <div class="self-center flex flex-row">
            <div>
                <svg width="38" height="28" viewBox="0 0 38 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="2" width="24" height="24" rx="12" fill="#4592FB"/>
                <rect x="11" y="1" width="26" height="26" rx="13" fill="#7445FB" stroke="#F7F7F9" stroke-width="2"/>
                </svg>
            </div>
            <div class="self-center font-[600] text-20">
                Payte
            </div>
        </div>
    </div>
    <div class="row-start-2 row-end-3 col-start-1 col-end-2 bg-primary flex flex-col justify-center">
        <div class="flex flex-row menu-item p-2 rounded-sm m-2 justify-start" @mouseover="changeSelected(0)" @mouseleave="resetSelected()">
            <Overview class="self-center mr-5" :selected=selected[0] />
            <SideBarItem content="Overview" :selected=selected[0] :news=9 />
        </div>
        <div class="flex flex-row menu-item p-2 rounded-sm m-2 justify-start" @mouseover="changeSelected(1)" @mouseleave="resetSelected()">
            <BuySell class="self-center mr-5" :selected=selected[1] />
            <SideBarItem content="Buy / Sell" :selected=selected[1] />
        </div>
        <div class="flex flex-row menu-item p-2 rounded-sm m-2 justify-start" @mouseover="changeSelected(2)" @mouseleave="resetSelected()">
            <Wallet class="self-center mr-5" :selected=selected[2] />
            <SideBarItem content="Wallet" :selected=selected[2] :news=11 />
        </div>
        <div class="flex flex-row menu-item p-2 rounded-sm m-2 justify-start" @mouseover="changeSelected(3)" @mouseleave="resetSelected()">
            <Bundles class="self-center mr-5" :selected=selected[3] />
            <SideBarItem content="Bundles" :selected=selected[3] />
        </div>
        <div class="flex flex-row menu-item p-2 rounded-sm m-2 justify-start" @mouseover="changeSelected(4)" @mouseleave="resetSelected()">
            <Reporting class="self-center mr-5" :selected=selected[4] />
            <SideBarItem content="Reporting" :selected=selected[4] />
        </div>
        <div class="flex flex-row menu-item p-2 rounded-sm m-2 justify-start" @mouseover="changeSelected(5)" @mouseleave="resetSelected()">
            <Community class="self-center mr-5" :selected=selected[5] />
            <SideBarItem content="Community" :selected=selected[5] />
        </div>
    </div>
    <div class="row-start-3 row-end-4 col-start-1 col-end-2 bg-primary flex flex-col justify-between">
        <Fav />
        <Profile />
    </div>
</template>