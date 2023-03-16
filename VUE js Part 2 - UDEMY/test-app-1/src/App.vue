<template>
    <div>
        <!-- Adding child component from parent component (APP) -->
        <!-- Without importing component here -->
        <welcome-message></welcome-message>
    </div>
</template>

<script>
import Welcome from './components/Welcome.vue'


export default {
  components: { Welcome },
  name: 'App',
}
</script>

<style>
</style>
