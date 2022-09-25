<template>
  <div>
    <h1>{{ title }}</h1>
    <input type="text" @input="handleInput" ref="textInput" />
    <button @click="handleClick">Click Me</button>
    <p ref="displaytext">{{text}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "My First Vue app :)",
      text: "Type somthing and click the button"
    };
  },

  methods: {
    handleClick(){
        console.log(this.$refs.textInput);
        this.$refs.displaytext.classList.add("active");
    },
     handleInput(){
        console.log(this.$refs.textInput.value);
        this.text = this.$refs.textInput.value;

        this.$refs.displaytext.classList.remove("active");
    }
  },
};
</script>

<style>
  h1 {
    color: rgb(255, 83, 111);
  }

  .active{
    color: skyblue;
  }
</style>


aa