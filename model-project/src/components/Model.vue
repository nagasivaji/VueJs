<template>
    <div class="backdrop">
        <div class="model">
            <h1>Model Title</h1>
            <p>model content</p>
        </div>
    </div>
</template>


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
</style>

/*
    when we specify the style tag just normally like this <style ></style>
    then the stylong inside this style tag will appply to globally 

    To limit this styling to this specific component,
    we have to spesify "scoped" in style tag like this <style scoped></style>


    Then the stylings is applied to only this component.

 */