<template>
   <button type="button" name="button" @click="goadd">增加</button>
</template>


<script>
    export default {
      name: "customevent",
       methods: {
         goadd() {
             this.$emit("add");
             this.$root.$emit("hello")
         }
       }
    }
</script>
