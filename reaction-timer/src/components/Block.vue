<template>
    <div class="block" v-if="showBlock">
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
        }
    },

    // Life cycle hook will fire when component is mounted to an HTML tag
    mounted() {
        console.log("Mounted the component");

        // setting timer to chnage the value of "showBlock" after a delay of this.delay
        // Which is comming form Block Component Tag
        setTimeout(()=>{
            this.showBlock = true;
            console.log(this.delay);
        }, this.delay);
    },
    // Life cycle hook will fire when component data is updated
    updated() {
        // It will print when showBlock is updated with setTimeout in mounted hook
        console.log("Updated the component");
    },
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background:  #0faf87;;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>