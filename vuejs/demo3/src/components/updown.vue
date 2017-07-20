<template>
   <div>
      <a href="javascript:;" @click="jian">-</a>
      <strong>{{value}}</strong>
      <a href="javascript:;" @click="add">+</a>
   </div>
</template>

<script>
   export default {
      data() {
         return {
           value: 0
         }
      },
      props: {

        result: {
          type: Number,
          default: 0
        }
      },
      model: {
        prop: "result",
        event: "change"
      },
      name: "updown",
      methods: {
        add(){
           this.value++;
           this.$emit("change", this.value)
        },
        jian(){
          this.value--;
          this.$emit("change", this.value)
        }
      }
   }
</script>
