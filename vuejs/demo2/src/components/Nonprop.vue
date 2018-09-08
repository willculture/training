<template id="">
    <section link="http://www.youtube.com" class="sub">
       <h3>{{message}}</h3>
    </section>
</template>


<script>
    export default {
       props: {
         message: {
           default: ""
         }
       }
    }
</script>
