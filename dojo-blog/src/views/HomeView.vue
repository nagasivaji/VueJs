<template>
    <div class="home">
        <h1>HOME</h1>
        <div v-if="error">{{error}}</div>

        <div v-if="posts.length">
            <PostList :posts= 'posts' />
        </div>
        <div v-else>Loading...</div>
        
    </div>
</template>

<script>
// importing components
import PostList from '../components/PostList.vue';
// Importing refs
import { ref } from "vue";


export default {
    name: "HomeView",
    components: { PostList },

    setup() {

        const posts = ref([]);
        const error = ref(null);

        // API
        const load = async() => {
            try{
                let data = await fetch("http://localhost:8000/posts");
                //console.log(data);
                if(!data.ok)
                    throw Error('No data available');

                posts.value = await data.json();
            }
            catch(err){
                error.value = err.message;
                console.log(error.value);
            }
        }

        load();

        return { posts, error };
    },
};
</script>

