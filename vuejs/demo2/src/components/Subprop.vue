<template id="">
    <section>
         <h3>{{message}}</h3>
         <p>{{parent}}</p>
    </section>
</template>


<script>
    export default {
       name: "subprop",
       props: {
         message: {default: "subprop"},
         parent: {
           type: Number,
           default: "",
           validator(val) {
              console.log(val)
              return false;
           }
         }
       }

    }
</script>
