<template>
  <div>
    <ul>
      <li v-for="project in projects" :key="project.id">
        {{ project.title }}
      </li>
    </ul>
    <button @click="nextPage()">Avanti</button>
    <button @click="previousPage()">Dietro</button>
  </div>
</template>

<script>
import axios from "axios";
import { store } from "./store"
  export default {
    name: "App",
    data(){
      return{
        store,
        projects:[],
        currentPage:1,
        lastPage:0,
      };
    },
    methods: {
      getAllProjects(){
        console.log('pippo');
        axios.get(store.apiUrl + "/projects", {params: {page : this.currentPage}}).then((res)=>{
          console.log(res);
          this.projects= res.data.data;
          this.currentPage = res.data.current_page;
          console.log(this.currentPage);
          this.lastPage = res.data.last_page;
        })
      },
      nextPage(){
        this.currentPage = this.currentPage + 1;
        this.getAllProjects();
      },
      previousPage(){
        this.currentPage = this.currentPage - 1;
        this.getAllProjects();
      }
    },
    mounted(){
      this.getAllProjects();
    }
  }
</script>

<style lang="scss" scoped>

</style>