<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello>
         <template scope="props">
             <h3>{{props.value}}</h3>
         </template>
    </hello>
  </div>
</template>

<script>
  import Hello from './components/Hello'



  export default {
    name: 'app',
    components: {
      Hello
    },
    data() {
      return {

      }
    },
    methods: {

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
