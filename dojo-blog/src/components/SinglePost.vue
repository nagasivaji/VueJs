<template>
    <div class="post">
        <h3>{{post.title}}</h3>
        <p>{{snippet}}</p>
    </div>
</template>

<script>
// importing computed hook
import { computed } from 'vue';
export default {
    props: ["post"],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.length > 100 ? props.post.body.substring(0, 99) + "....": props.post.body;
        });


        return {snippet};
    }
}
</script>

<style>

</style>