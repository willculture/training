// //animal 构造函数
// function Animal(name, age) {
//   this.name = name; //成员属性
//   this.age = age;

//   //成员方法
//   this.walk = function() {
//     console.log(this.name, '正在走路');
//   }

//   this.dance = function() {
//     console.log(this.name, "正在跳舞");
//   }

//   // console.log(this);
// }

 

// //通过new 一个构造函数, 来实例化出一个实际的对象.
// const animal = new Animal('animal', 3);

// console.log(animal.name, animal.age);

// animal.walk();
// animal.dance();

// ///////
// const monkey = new Animal('monkey', 2);

// monkey.walk();
// monkey.dance();

// console.log(monkey.constructor)

// ///继承
// function Person(name, age) {
//   Animal.call(this, name, age);
// }

// const person = new Person("小米", 12);

// person.dance();

// console.log(person.constructor)
// // Animal.apply(global, ['名称', 0]);

// //通过得到实例化对象的构造函数, 来创建另外一个实例
// const person2 = new (person.constructor)("张三", 22);

// person2.walk();



//prototype



//
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.dance = function() {
      console.log("正在跳舞")
    }
  }

  walk() {
    console.log(this.name, "正在走路")
  }
}


class Snake extends Animal {

}

const sam = new Snake("sam", 0);

sam.walk();
sam.dance();