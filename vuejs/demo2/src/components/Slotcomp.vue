<template id="">
   <div>
      <slot name="nav">我是子组件导航</slot>
      <slot :hello="world">我是子组件内容</slot>
      <button type="button" name="button" @click="change">改变</button>

       <slot name="bodys" :value="item" v-for="item in items"></slot>
   </div>
</template>


<script>
   export default {
     data() {
       return {
         world: "hello vuejs",
         items: ["1", "2", "3"]
       }
     },
     methods: {
       change() {
           this.world = "come here";
       }
     }
   }
</script>
