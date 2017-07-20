
<template>

<section>
    <component :is="view"></component>
</section>

</template>

<script>

export default {
    name: 'hello',
    data() {
      return {
         view: "about"
      }
    },
    components: {
      "home": {
        template: "<h1>我是home</h1>"
      },
      "about": {
        template: "<h1>关于我们</h1>"
      },
      "contact": {
        template: "<h1>联系我们</h1>"
      }
    }
}
</script>
