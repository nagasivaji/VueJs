<template>
  <div>
    <div id="nav">
      <router-link :to="{name: 'home', params: {abc: 'This is home'}}">Home</router-link>
      <router-link :to="{name: 'about', params: {abc: 'This is About'}}">About</router-link>
      <!-- <router-link :to="'/home/abc'">Home</router-link>
      <router-link :to="'/about/abc'">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
