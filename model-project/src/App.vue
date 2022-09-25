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
