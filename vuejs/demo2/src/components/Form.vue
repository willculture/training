<template>
  <section>
      <h3>{{msg}}</h3>

      <div class="select">
          <label for="">下拉框:</label>
          <select class="" name="" v-model="sct">
              <option value="" disabled>请选择</option>
              <option value="1">第一个</option>
              <option value="2">第二个</option>
              <option value="3">第三个</option>
          </select>
          <p>请选择的值: {{sct}}</p>
      </div>

      <div class="radio">
         <label for="">radio:</label>
         <input type="radio" name="" value="m" v-model="sex"> 男
         <input type="radio" name="" value="f" v-model="sex"> 女
         <p>选择的值: {{sex}}</p>
      </div>

      <div class="input">
        <label for="">input:</label>
        <input type="text" name="" :value="nick" v-model.trim="fullname">
        <p>输入的值：{{fullname}}</p>
      </div>
      <hr>
      <div class="textarea">
        <label for="">textarea: </label>
        <textarea name="name" rows="8" cols="80" v-model="person.intro"></textarea>
        <input type="number" v-model.number="person.age">
        <p>输入的值： {{person}}</p>
      </div>


  </section>
</template>


<script>

   export default {
     name: "form",
     data() {
       return {
           msg: "表单输入",
           sct: 0,
           sex: 'm',
           fullname: "Will Wu",
           nick: "Will",
           person: {
             age: 0,
             intro: "hello world"
           }
       }
     }
   }


</script>
