<script lang="ts" setup>
import api from '@/Api';
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';



const statuses = ref([]);

onMounted(()=>{
    fetchStatus();
})

const fetchStatus=()=>{
    api.get('/status')
    .then((res)=>{
        console.log(res.data.statuses);
        statuses.value=res.data.statuses;
    })
    .catch((err)=>{
        console.log(err);
    })
}


const deletestatus = (id) =>{
    api.delete(`/status/${id}`)
    .then((res)=>{
        console.log(res);
        if(res.data.statuses){
            fetchStatus();
        }
    })
    .catch((err)=>{
        console.log(err);
    })
}

</script>


<template>

    <div class="d-grid gap-2 d-md-flex justify-content-md-end mb-3">
        <a class="btn btn-info" href="/status/create">Add Status</a>
    </div>

    <div class="row">
        <div class="col">
            <div class="card">
                    <h3>Manage Status</h3>
                <div class="card-body">
                    <div>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="status in statuses">
                                    <th>{{ status.id }}</th>
                                    <th>{{ status.name }}</th>
                                    <th>{{ status.description }}</th>
                                    <th class="btn-group">
                                      <RouterLink :to="`/status/show/${status.id}`" class="btn btn-primary">Show</RouterLink>
                                      <RouterLink :to="`/status/edit/${status.id}`" class="btn btn-success">Edit</RouterLink>
                                         <a class="btn btn-danger" @click="deletestatus(status.id )">Delete</a>  
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<style>

</style>