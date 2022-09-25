<template>
    <div>
        <h1>{{ title }}</h1>
        <Model />
    </div>
</template>

<script>
    // Importing Model component from component folder
    import Model from "./components/Model.vue";

    export default {
        name: "App",
        components : { Model },
        data() {
            return {
                title: "My First Vue app :)",
                text: "Type somthing and click the button"
            };
    },
};

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1 {
        border-bottom: 1px solid #ddd;
        display: inline-block;
        padding-bottom: 10px;
    }
</style>
