<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>

<script>


export default {
    name: 'App',
    data (){
        return {
            title: "My First Vue app :)"
        }
    }
  
}
</script>

<style>
    h1{
        color: rgb(255, 83, 111);
    }
</style>
