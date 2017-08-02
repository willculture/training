<template>
    <section>
        <h3>{{msg}}</h3>
        <p>Time: {{time}}</p>
        <p>Name: {{fullname}}</p>

        <input type="text" v-model="fullname" name="" value="">
    </section>
</template>

<script>

  export default {
     name: "compute",
     data() {
       return {
         msg: "计算属性使用",
         firstName: "Will",
         lastName: "Wu"
       }
     },
     computed: {
       time() {
         return Date.now()
       },
       fullname: {
         get(){
            return this.firstName + " " + this.lastName;
         },
         set(newval) {
             const vals = newval.split(" ");
             this.firstName = vals[0];
             this.lastName = vals[1];
         }
       }
     }
  }

</script>
