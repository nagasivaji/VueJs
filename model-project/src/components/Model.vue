<template>
    <!-- On click will work only for the backdrop div not for it child elements -->
    <div class="backdrop" @click.self="closeModel">
        <div class="model" :class="{sale : theme === 'sale'}">
            <h1>{{header}}</h1>
            <p>{{text}}</p>
        </div>
    </div>
</template>


<script>
export default {
    props : ['header', 'text', 'theme'],
    methods: {
        closeModel(){
            //console.log(this.closeModel);
            //this.closeModel();
            this.$emit('close');
        }
    },
}
</script>



<style>
    .model{
        width: 400px;
        padding: 20px;
        margin: 100px auto;
        background: white;
        border-radius: 10px;
    }

    .backdrop{
        top: 0;
        position: fixed;
        background: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
    }

    .model h1{
        color: #03cfbf;
        border: none;
        padding: 0;
    }

    .model p{
        font-style: normal;
    }

    .model.sale{
        background: crimson;
        color: white;
    }

    .model.sale h1{
        color: white;
    }
</style>

