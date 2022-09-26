<template>
    <div>
        <h1>Ninja Reaction Timer</h1>
        <button @click="start" :disabled="isPlaying">Play</button>
        <Block v-if="isPlaying" :delay="delay" @end="endGame" />
        <!-- <p v-if="score">Reaction Time: {{score}}ms</p> -->
        <Results v-if="score" :time="this.score" />
    </div>
</template>


<script>
// Importing Components
import Block from './components/Block.vue';
import Results from './components/Results.vue';

export default {

    name: 'App',
    // Registering Components
    components: { Block, Results },
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
button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
}
button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
}

</style>
