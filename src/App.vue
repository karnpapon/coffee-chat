<template>
  <div class="container">
    <div id="app"></div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 1.25em;
  }

  .container{
    height: 100vh;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
