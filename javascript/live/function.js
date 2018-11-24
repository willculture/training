//初始化参数

function initArg(name = 'name', age = 0, ...arg) {
  //  name = name || "name";
  //  age = age || 0;
   console.log(name, age, arg);
}
const defaultValue = {name: 'name', age: 0};

function initArg2(obj = defaultValue) {

  console.log(obj === defaultValue)

  obj.name = "object";

}

initArg2();

console.log(defaultValue)

