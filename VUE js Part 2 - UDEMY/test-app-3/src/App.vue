<template>
  <div>
    <div id="nav">
      <router-link :to="{name: 'home', query: {abc: 'This is home', xyz: 259}}">Home</router-link>
      <router-link :to="{name: 'about', query: {abc: 'This is About', xyz: 289}}">About</router-link>
      <!-- <router-link :to="'/home/abc'">Home</router-link>
      <router-link :to="'/about/abc'">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
