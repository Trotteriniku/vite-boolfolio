<template>
    <div class="p-5"  >
        <img :src="`${store.imgPath}${project1.preview}`" class="card-img-top" alt="...">
        
       <h1 class="text-light">{{ project1.title }}</h1> 
        
    </div>
</template>

<script>
import { store } from "../store";

    export default {
        name:"ProjectPreview",
        props: ['project1'],
        data(){
            return{
                store,
            }
        },
        components:{

        },
        methods:{
           
        },
        mounted(){
        }
    }
</script>

<style lang="scss" scoped>
div{
    background-color: #0b2531;
   
}
</style>