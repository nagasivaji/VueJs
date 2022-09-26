<template>
    <div>
        <h1>Job Detils Page</h1>
        <p>Job id is {{id}}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        // return {
        //     id: this.$route.params.id,
        // }
    },
}
</script>

<style>

</style>