<template>
    <main class="container p-5">
        <div v-if="project">
            <h1 class="display-3 text-light text-center">{{ project.title }}</h1>
            <p class="fs-3 text-light text-center">{{ project.body }}</p>
            <div class="d-flex gap-5 "> 
                <img class="w-50 rounded-3 " :src="`${store.imgPath}${project.preview}`" :alt="project.title">
                <div class="w-50 text-center bg-dark p-5 ">
                    <h2 class="text-light">Aggiungere campo gif per mostrare stile e funzionalità</h2>
                </div>
            </div>
            
            <h3 class="b">{{ project.type.name }}</h3>
        </div> 
        <!-- <router-link :to="{name: 'single-project', params:{slug: {'laravel-comics-2'}}}"></router-link> -->
        <router-link :to="{ name: 'single-project', params:{slug: 'laravel-comics-2'}}" :key="$route.fullPath">nextPage</router-link>
    </main>
</template>

<script>
import axios from 'axios';
import { store } from "../store";

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: null,
        };
    },
    methods: {
        getProjectData() {
            console.log(this.$route);
            axios.get(`${store.apiUrl}/projects/${this.$route.params.slug}`).then((res) => {
                if (res.data) {
                    this.project = res.data;
                    console.log(this.project);
                } else {
                    this.$router.push({ name: 'not-found' });
                }
            });
        },
    },
    watch: {
        $route: 'getProjectData',
    },
    mounted() {
        this.getProjectData();
    },
};
</script>

<style lang="scss" scoped>
    /* Aggiungi i tuoi stili qui */
</style>


<!-- goToNext(){
    id = project.id;
    projects = getAllProjects();
    if(projects.length() === this.id){
        nextProject = projects[0]; 
        this.id = 1;  
    } else {
        nextProject = projects[id];
        this.id = this.id++;   
    } 
    nextProject.slug;


},
getAllProjects(){
axios.get(store.apiUrl + "/projects", {params: {page: this.currentPage}}).then((res)=>{
  console.log(res);
  this.projects = res.data.results.data;
  this.currentPage = res.data.results.current_page;
  this.lastPage = res.data.results.last_page;
}) -->