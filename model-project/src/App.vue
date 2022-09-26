<template>
    <div>
        <h1>{{ title }}</h1>
        <p>Welcome...</p>
        <div v-if="showModel">
            <Model :header="header" :text="text" theme="sale" @close="toggleModel" />
        </div>
        <button @click="toggleModel">open model</button>
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
                header: "Sign up for the Giveaway!",
                text: "grab your ninja  swag  for half price!",
                showModel: false
            };
        },

        methods: {
            toggleModel(){
                this.showModel = !this.showModel;
            }
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
