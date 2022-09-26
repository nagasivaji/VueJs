<template>
    <div class="backdrop" @click.self="closeModel">
        <div class="model" :class="{sale : theme === 'sale'}">
            <!-- If we use sloat then it will replace data comming from Component tag -->
            <slot></slot>
            <div class="actions">
                <slot name="links"></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props : ['theme'],
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

    /* sale styles */
    .model .actions {
        text-align: center;
        margin: 30px 0px 10px 0px;
        color: #333;
    }
    .model .actions a{
        color: #333;
        padding: 8px;
        border: 1px solid #eee;
        border-radius: 4px;
        text-decoration: none;
        margin: 10px;
    }

    .model.sale{
        background-color: crimson;
        color: white;
    }

    .model.sale h1{
        color: white;
    }

    .model.sale .actions{
        color: white;
    }

    .model.sale .actions a{
        color: white;
    }


</style>

