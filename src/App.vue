<template>

    <AppHeader></AppHeader>
  <router-view ></router-view>

  
</template>

<script>
import axios from "axios";
import { store } from "./store"
import AppHeader from "./components/AppHeader.vue";
  export default {
    name: "App",
    data() {
        return {
            store,
            projects: [],
            currentPage: 1,
            lastPage: 0,
        };
    },
    methods: {
        
    },
    mounted() {
    },
    components: { AppHeader }
}
</script>

<style lang="scss" scoped>
@use "./assets/styles/partials/variables";


</style>