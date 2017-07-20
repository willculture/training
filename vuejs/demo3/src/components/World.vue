<template>
   <section>
      <h5>World! {{nick}} - {{val}}</h5>

      <button type="button" @click="gofn">提交</button>
      <input type="text" :value="nick" @input="change">

      <hr>
      <h3>{{result}}</h3>
      <updown v-model="result"></updown>
   </section>
</template>


<script>

   import Updown from "./updown.vue"

    export default {

      data:function(){
        console.log(this.$children)
        return {nick : "Will", val: 3, result:0}
      },

      methods: {
        gofn(){
            this.$emit("add");
            this.$root.$emit("hello", "test");
            console.log(this)
        },
        change(arg) {
          this.nick = arg.target.value;
        }
      },

      components: {
         Updown
      }

    }

</script>
