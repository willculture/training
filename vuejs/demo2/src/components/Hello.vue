<template>
  <div class="hello" >
    <h1>{{ msg }}</h1>

    <button v-on:click="change('hello, world', $event)">change</button>
    <a href="http://www.bing.com" >跳转</a>

    <input type="text" name="" value="" @keyup.ctrl.enter="keyevent">
  </div>
</template>

<script>
export default {
  name: 'hello',
  created() {
    this.$root.$on("hello", function() {
      console.log("i'm hello comp")
    })
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    change(passstr, e) {
       this.msg = "事件处理:" + passstr;
       console.log(arguments.length)
       console.log(e);
    },
    keyevent() {
      console.log("keyup")
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
