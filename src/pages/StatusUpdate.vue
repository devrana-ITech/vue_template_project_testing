<script lang="ts" setup>
import api from '@/Api';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';


const router = useRouter();

const {id} = useRoute().params;

const formData= reactive({
    id:"",
    name:"",
    description:""
})

const fetchStatus=()=>{
    api.get(`/status/${id}`)
    .then((res)=>{
        console.log(res.data);
        formData.id=res.data.statuses.id
        formData.name=res.data.statuses.name
        formData.description=res.data.statuses.description
        
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

onMounted(()=>{
    fetchStatus()
})

const submitData=()=>{
    api.put("/status/"+formData.id, formData)
    .then((res)=>{
        console.log(res.data);
        router.push({path:'/status'});
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
        <!-- Baisc Form Controls start -->
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h5>Basic Form Controls</h5>
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