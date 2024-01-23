<template>
    <div class="p-5">
        <img  v-if="project" :src="`${store.imgPath}${project.preview}`" class="card-img-top" alt="...">
        
    </div>
</template>

<script>
import { store } from "../store";

    export default {
        name:"ProjectPreview",
        data(){
            return{
                store,
                project:null
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