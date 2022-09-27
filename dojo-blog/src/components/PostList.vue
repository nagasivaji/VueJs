<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script>
// impoering components
import SinglePost from './SinglePost.vue';
import { onMounted } from 'vue';

export default {
    props: ['posts'],
    components: { SinglePost},
    setup(props) {
        console.log(props);
        // Life cycle hooks in setup()
        onMounted(console.log("Mounted"));
    }
}
</script>

<style>

</style>