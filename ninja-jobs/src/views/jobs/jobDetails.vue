<template>
    <div v-if="status">
        <h1>Job Detils Page</h1>
        <p>Job id is {{job.id}}</p>
        <h2>Job title is {{job.title}}</h2>
        <p>Job detils is {{job.details}}</p>
    </div>
    <div v-else>
        <p>Loading....</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: {},
            status: false,
        }
    },
    mounted() {
        fetch("http://localhost:8000/jobs/"+this.id)
        .then((res) =>{
            //console.log(res.status);
            if(res.status !== 404)
                this.status = true
            return res.json();
        })
        .then((data) =>{
            this.job = data;
            //console.log(data);
        })
        .catch((err) =>{
            console.log(err.message);
        });
    },

}
</script>

<style>

</style>