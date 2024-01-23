<template>
<nav class="navbar navbar-expand-lg   p-3 ">
  <a class="navbar-brand text-light display-1 fs-4   " href="#" style="padding-bottom:10px;border-bottom: 2px dotted #e58946; ">Stefano.Z</a>
  <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        
        <li class="nav-item" v-for="item in menu" >
            <router-link class="nav-link route-hover "  active-class="my-active"  :to="{ name:item.name}">{{ item.label }}</router-link>
            <!-- <a class="nav-link" href="#">Link</a> -->
        </li>
       
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
  </div>
</nav>
</template>

<script>
    export default {
        name: 'AppHeader',
        data(){
            return{
                menu: [
                    {
                        label:"Home",
                        name: "home",

                    },
                    {
                        label:"Projects",
                        name:"projects"
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
nav{
    background-color: #34596F;
    // background-color: #045174;
    // box-shadow: 2px 1px 20px #3a3a3a6b;
    height: 70px;

    .route-hover{
        padding-bottom:11px;
        color: whitesmoke;
        &:hover{
            color: #e58946!important;
           border-bottom: 2px solid #e58946; 
        }
        
    }
    .my-active{
              color: #e58946!important;
    }
}
</style>