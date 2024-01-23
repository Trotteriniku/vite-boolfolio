<template>
    <div class="container">
        <h1 class="text-light display-1 fw-normal text-center">Project list</h1>
        <div class=" d-flex text-center align-items-center  justify-content-between ">
            <i class="fa-solid fa-chevron-left fa-2xl arrow left-arrow me-5 pe-5 " @click="previousPage()"></i>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-6 gy-5 " v-for="project in store.projects" :key="project.id">
                    <ProjectCard :project="project"/>
                </div>
            </div>
            <i class="fa-solid fa-chevron-right fa-2xl arrow right-arrow ms-5 ps-5 " @click="nextPage()" ></i>
        </div>
    </div>
    
    
</template>

<script>
import {store } from "../store";
import axios from "axios";
import ProjectCard from '../components/ProjectCard.vue';
    export default {
    name: 'AppProjects',
    components: {
        ProjectCard
    },
    data() {
        return {
            store,
        };
    },
    methods: {
        getAllProjects() {
            axios.get(store.apiUrl + "/projects", { params: { page: this.currentPage } }).then((res) => {
                this.store.projects = res.data.data;
                this.currentPage = res.data.current_page;
                this.lastPage = res.data.last_page;
            }).catch((err)=>{
                console.log('error', err);
            });
        },
        nextPage() {
            this.currentPage = this.currentPage + 1;
            this.getAllProjects();
        },
        previousPage() {
            this.currentPage = this.currentPage - 1;
            this.getAllProjects();
        }
    },
    mounted() {
        this.getAllProjects();
    },
}
</script>

<style lang="scss" scoped>
i{
    font-size: 60px;
    color: #e58946;
    transition: 0.3s;
    &:hover{
        cursor: pointer;
        transform: scale(1.3);
    }
}

.card{
    background-color: #0b2531!important;
    color: whitesmoke;
}
</style>