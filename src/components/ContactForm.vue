<template>
    <form @submit.prevent="submitForm()">
  <div class="form-group">
    <label for="name"> Your Name</label>
    <input type="text" class="form-control" id="name"  placeholder="Enter name" v-model="data.name">
  </div>
  <div class="form-group">
    <label for="email">Email </label>
    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="data.email">
    <small id="email" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="address">address</label>
    <input type="text" class="form-control" id="address" placeholder="address" v-model="data.address">
  </div>
  <div class="form-group">
    <label for="message">message</label>
    <textarea type="text" class="form-control" id="message" placeholder="message" v-model="data.message"></textarea>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  <button type="reset" class="btn btn-primary">Reset</button>
</form>
</template>

<script>
import axios from 'axios';
import {store} from "../store"
    export default {
        name:"ContactForm",
        data(){
            return{
                store,
                data:{
                    name:'',
                    email:'',
                    address:'',
                    message:''
                }
                
            }
        },
        methods:{
            submitForm(){
                axios.post(this.store.apiUrl + '/contacts' , this.data ).then((res)=>{
                    console.log(res.data);
                    this.name='';
                    this.email='';
                    this.address='';
                    this.message='';
                }).catch((err)=>{
                    console.log('error', err);
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>