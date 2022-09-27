<template>
    <div class="home">
        <h1>HOME</h1>
        <PostList :posts= 'posts' />

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

        const posts = ref([
            {
                title: 'Welcometo the blog',
                body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,',
                id: 1
            }, 
            {
                title: 'Top 5 CSS tips',
                body: 'Lorem ipsum',
                id: 2
            }]);

        return { posts };
    },
};
</script>

