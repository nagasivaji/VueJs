<template>
    <div class="home">
        <h1>HOME</h1>
        <input type="text" v-model="search">
        <p>Serch: {{search}}</p>
        <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    </div>
</template>

<script>
// Importing refs
import { computed, ref, watch, watchEffect } from "vue";

export default {
    name: "HomeView",

    setup() {
        const search = ref("")
        const names = ref(['mario', 'yoshi', 'luigi', 'toda', 'bowser', 'koopa', 'peach']);

        // watch function will trigget whenever any chnage in the value of a variable which is passed to whatch function, in our case it is search
        watch(search, () =>{
            console.log('Watch function fired');
        });


        // Watch Effect function will trigger whenever the setup() function is fired for the first time.
        watchEffect(() => {
            console.log('Watch effect function fired');
        });

        const matchingNames = computed(() =>{
            return names.value.filter((name) =>{
                return name.includes(search.value);
            });
        });

        return { names , search, matchingNames};
    },
};
</script>

