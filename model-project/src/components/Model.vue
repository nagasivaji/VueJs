<template>
    <div class="backdrop">
        <div class="model">
            <h1>{{title}}</h1>
            <p>{{content}}</p>
            <span>{{student[0]}}  {{student[1]}}</span>
        </div>
    </div>
</template>


<script>
export default {
    props : ['title', 'content', 'student']
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
</style>

