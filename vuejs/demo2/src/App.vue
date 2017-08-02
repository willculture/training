<template>
  <div id="app">
    <img src="./assets/logo.png">

    {{message | filterA | filterB('A', 'B')}}

    <!--
    <a href="javascript:;" @click="change('hello')">Hello</a>
    <a href="javascript:;" @click="change('FormComp')">表单</a>
    <a href="javascript:;" @click="change('StylesComp')">样式</a>
    <keep-alive>
    <component :is="view"></component>
    </keep-alive>

   <hello></hello>
     <form-comp></form-comp>
    <styles-comp></styles-comp>
    <compute></compute>
    <watcher></watcher>

    <subprop message="i'm parent 2" :parent="test"></subprop>
    <nonprop message="parent msg" link="http://www.google.com" class="hello"></nonprop>

    <h5>{{count}}</h5>
    <customevent @add="counter"></customevent>
    <h1>{{result}}</h1>
    <custommodel v-model="result"></custommodel>
    <slotcomp>
        <ul slot="nav">
          <li>导航1</li>
        </ul>
        <template scope="pro">
           <h3>我是父组件的内容: {{pro.hello}}</h3>
        </template>

        <template scope="props" slot="bodys">
            <div>{{props.value}} {{props}}</div>
        </template>

    </slotcomp>-->
  </div>
</template>

<script>
import Hello from './components/Hello';
import FormComp from './components/Form';
import StylesComp from './components/Style';
import Compute from './components/computed';
import Watcher from './components/watcher';
import Subprop from './components/Subprop';
import Nonprop from './components/Nonprop';
import Customevent from './components/Customevent';
import Custommodel from './components/custommodel';
import Slotcomp from './components/Slotcomp';

export default {
  name: 'app',
  components: {
    Hello,
    FormComp,
    StylesComp,
    Compute,
    Watcher,
    Subprop,
    Nonprop,
    Customevent,
    Custommodel,
    Slotcomp
  },
  data() {

     return {
        test: 100,
        count: 0,
        result: 0,
        view: Hello,
        message: "Hello World"
     }
  },
  filters: {
    filterA(val) {
      console.log(val, arguments.length)
      val = val.replace(" ", "");
      return val;
    },
    filterB(val, arg1, arg2) {
      console.log(val)
      return val + " " + arg1 + " " + arg2;
    }
  },
  methods: {
     counter() {
        this.count++;
     },
     change(key){
         this.view = key;
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
