<template>

   <section>
        <h3 class="red">{{msg}}</h3>
        <p class="normal test" :class="{active: isact, red: haserr}">this is test</p>
        <p :class="[style$act, style$red, style]">this is an array</p>
        <p :class="[isact?style$act: '', style]" >exp in array</p>
   </section>

</template>

<script>
    export default {
      name: "style",
      data() {
        return {
          msg: "样式表处理",
          isact: false,
          haserr: true,
          style$act: "active",
          style$red: "red",
          style: ["test", "hello"]
        }
      }

    }
</script>

<style scoped>
  .red {
    color: red;
  }

</style>
