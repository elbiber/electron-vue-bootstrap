<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todos/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    HelloWorld, Todos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
