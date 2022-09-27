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
// imporing grtposts logic from external js file
import getPosts from './../composables/getPosts';


export default {
    name: "HomeView",
    components: { PostList },

    setup() {

        const {posts, error, load} = getPosts();
        
        return { posts, error };
    },
};
</script>

