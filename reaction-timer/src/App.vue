<template>
    <div>
        <h1>Ninja Reaction Timer</h1>
        <button @click="start" :disabled="isPlaying">Play</button>
        <Block v-if="isPlaying" :delay="delay" @end="endGame" />
        <p v-if="score">Reaction Time: {{score}}ms</p>
    </div>
</template>


<script>
// Importing Components
import Block from './components/Block.vue';

export default {

    name: 'App',
    // Registering Components
    components: { Block },
    data() {
        return {
            isPlaying: false,
            delay: null,
            score: null
        }
    },
    methods: {
        start(){
            this.isPlaying = true;
            this.delay = 2000 + Math.random() * 5000;
            this.score = null;
            //console.log(this.delay);
        },
        endGame(reactionTime){
            //console.log(reactionTime);
            this.score = reactionTime;
            this.isPlaying = false;
        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #444;
    margin-top: 60px;
}
</style>
