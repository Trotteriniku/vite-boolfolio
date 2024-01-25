<template>
    <div class="container p-5">
        <h1 class="text-light display-1 fw-normal text-center">Project list</h1>
        <select name="types" id="types" v-model="selectedType">
            <option value="">All</option>
            <option v-for="type in store.types" :value="type.id" @click="selectedType= type.id" :key="type.id" >{{ type.name }}</option>
        </select>
        <div class=" d-flex text-center align-items-center  justify-content-between ">
            <i class="fa-solid fa-chevron-left fa-2xl arrow left-arrow me-5 pe-5 " @click="previousPage()"></i>
            <div class="row">
                <div class="col-12 col-md-4 col-lg-6 gy-5 " v-for="project in  selectType" :key="project.id">
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
import ProjectPreview from "@/components/ProjectPreview.vue";
    export default {
    name: 'AppProjects',
    components: {
        ProjectCard,
        ProjectPreview
    },
    data() {
        return {
            store,
            selectedType:null,
            result:null
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
        getAllTypes(){
            axios.get(store.apiUrl + "/types" ).then((res)=>{
                this.store.types= res.data
                console.log(this.store.types);
            })
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
    computed:{
        selectType(){
           if (!this.selectedType) {
            return this.store.projects
           } 
           return this.store.projects.filter((project)=> (this.selectedType === null || project.type_id === this.selectedType));
        },
    },
    mounted() {
        this.getAllProjects();
        this.getAllTypes();
    }
   
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