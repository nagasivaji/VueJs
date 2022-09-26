<template>
    <div>
        <h1>{{ title }}</h1>
        <p>Welcome...</p>
        <div v-if="showModel">
            <Model theme="sale" @close="toggleModel" >
                <h1>{{header}}</h1>
                <p>{{text}}</p>
                
                <!-- Named sloats so that we can identify them in chlid component -->
                <template v-slot:links>
                    <a href="#">Sign up</a>
                    
                    <a href="#">Log in </a>
                </template>
            </Model>
        </div>
        <button @click.ctrl="toggleModel">open model (ctrl)</button>
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


/*

    # The HTML tags which are passing between the Components are called Slots

            <Model theme="sale" @close="toggleModel" >
                <h1>{{header}}</h1>
                <p>{{text}}</p>
            </Model>

    # Model is the custom components
    # The h1 and p tags present in model tag are used to pass to Model Component

    # Sloats are used to pass some complex data other than strings, integers, booleans
    # Ex: to pass HTML form or some tags like av=bive example
 */
