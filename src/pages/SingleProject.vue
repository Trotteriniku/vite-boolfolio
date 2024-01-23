<template>
    <main class="container p-5">
        <div v-if="project">
            <h1 class="display-3 text-light">{{ project.title }}</h1>
            <img class="w-50 rounded-3 " :src="`${store.imgPath}${project.preview}`" :alt="project.title">
        </div>  
    </main>
</template>

<script>
import axios from 'axios';
import {store } from "../store";

    export default {
        name:'SingleProject',
        data(){
            return{
                store,
                project: null,
            }
        },
        methods:{
            getProjectData(){
                console.log(this.$route);
                axios.get(`${store.apiUrl}/projects/${this.$route.params.slug}`).then((res)=>{
                    if (res.data) {
                        this.project = res.data;
                        console.log(this.project);
                    }else{
                        this.$router.push({name: 'not-found'})
                    }
                    
                });
            }
        },
        mounted(){
            this.getProjectData();
        }
        
    }
</script>

<style lang="scss" scoped>

</style>