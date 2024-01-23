<template>

<div class=" padding  bg">
        <div class="d-flex box mt-5">

                <!-- BUTTON + PRESENTATION -->
            <div class="w-50  flex-column text-center  ">
                <h1 class=" display-3 fw-normal text-center mb-5  ">Hey I'm Stefano a junior <br>Full-Stack Developer</h1>
                <router-link class="btn btn-outline-orange rounded-0 text-light text-center p-3 fw-medium   " :to="{ name: 'projects'}">See my projects</router-link>
            </div>

                <!-- 3D PHOTO -->
            <div class="yellow-box ms-3 rounded-circle position-relative     ">
                <img class="my-foto position-absolute  " src="../assets/images/me.svg" alt="me">
            </div>
        </div>
</div>
<ProjectPreview></ProjectPreview>
</template>

<script>
import ProjectPreview from "@/components/ProjectPreview.vue";
import {store } from "../store";
    export default {
        name:"AppHome",
        data(){
            return{
                store,
            }
        },
        components:{
    ProjectPreview
},
        methods:{

        },
        mounted(){

        }
    }
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/_variables.scss" as *;
.bg{
    background-color: #045174;
    // background-color: #34596F;

    .box{
        margin-top: 100px;
        margin: 0 auto;


        .yellow-box{
            position: relative;
            background-color: yellow;
            box-shadow: 15px 10px 10px #3a3a3a6b;
            width: 400px;
            height: 400px;
            overflow: hidden;

         .my-foto{
            position: absolute;
            max-width: 100%;
            top: 40%;
            left: 50%;
            transform: translate(-40%, -40%) scale(1.5);
         }

        }

        h1{
        color: whitesmoke;
        text-indent:11%;
        margin: 0px;

        }

    }
}


.padding{
    padding: 75px;
}


</style>


