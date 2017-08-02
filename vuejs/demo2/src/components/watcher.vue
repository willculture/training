<template>
  <section>
      <h3>{{msg}}</h3>
      <p>{{firstName}}</p>
      <p>{{statemsg}}</p>
      <input type="text" v-model="firstName">
  </section>
</template>

<script>
   export default {
     name: "watecher",
     data() {
       return {
         msg: "属性监听",
         firstName: "Will",
         statemsg: ""
       }
     },
     watch: {
       firstName (val) {
         this.statemsg = "firstName 改变为: " + val;
       }
     }
   }
</script>
