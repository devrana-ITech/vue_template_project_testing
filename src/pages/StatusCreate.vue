<script lang="ts" setup>
import api from '@/Api';
import { reactive } from 'vue';



const formData= reactive({
    id:"",
    name:"",
    description:""
})


const submitData=()=>{
    api.post("/status", formData)
    .then((res)=>{
        console.log(res.data);
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

</script>

<template>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
        <a class="btn btn-info" href="/status">Back</a>
    </div>
<div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>Baisc Form Controls</h5>
                </div>
                  {{ formData }}
                <div class="card-body">
                    <form @submit.prevent="submitData">
                        <div class="app-form">
                            <div class="mb-3">
                                <label for="username" class="form-label">Name</label>
                                <input v-model="formData.name" type="text" class="form-control" placeholder="Enter Your Username" id="username">
                            </div>
                            <div class="mb-3">
                                <label for="username" class="form-label">Description</label>
                                <input v-model="formData.description" type="text" class="form-control" placeholder="Enter Your Username" id="username">
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>



<style>

</style>