<script lang="ts" setup>
import api from '@/api';
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
                                    <th>
                                      <RouterLink :to="`/status/edit/${status.id}`" class="btn btn-primary">Edit</RouterLink>
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