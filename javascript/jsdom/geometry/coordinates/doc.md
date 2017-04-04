## 概要
主要针对那些处理
* 相对于window
* 相对于文档

坐标能做什么?
1. 弹出框的定位
2. 标签的定位
3. 滚动插件
4. more............

## window坐标
window坐标, 是相对于可视化窗口而言. 可视化窗口就是浏览器中, 可显示出来的内容

#### screenLeft, screenTop

#### screenX, screenY

#### scrollX, scrollY

#### pageXOffset, pageYOffset

#### screen.availLeft, screen.availTop

#### getBoundingClientRect()
* top - 元素顶部到窗口顶部
* left - 元素左边到窗口左边
* right - 元素右边到窗口左边
* bottom - 元素底部到窗口顶部

他们的共同点都是针对window上的坐标原点来计算.
- [x] 通过这四个属性, 可以算出元素的宽度和高度

  >width = right - left
  >
  >height = bottom - top

- [x] 当出现滚动时, window坐标也会随之改变
- [x]  坐标可以为小数, 也可以为负数

#### elementFromPoint(x, y)
这个方法主要作用是返回某个坐标点所在的标签元素
> var elem = document.elementFromPoint(x, y)

从这个字面意义就可以看出来这个意思, 比如我们获取窗口中间的元素

> var cx = document.documentElement.clientWidth / 2;

> var cy = document.documentElement.clientHeight / 2;

> var elem = document.elementFromPoint(cx, cy)

以下为null的情况:

- [x] 坐标为负数
- [x] 坐标超出了可见区域

#### postition:fixed
大多数时候, 我们需要通过坐标来设置某些元素的位置, 在CSS中, 我们使用position:fixed的left,top或者right, bottom.
我们通过一个例子来, 理解这个.
例子: 我们有一个按钮, 当点击按钮的时候, 在按钮的下方显示一个提示语. 这个例子也是我们可以经常看到的.
```html

<button>点击我</button>
```

```javascript
  <script>
      var button = document.querySelector("button");

      function showTips() {
          var rect = button.getBoundingClientRect();
          var tip = document.createElement("div");
          tip.style.cssText = "position: fixed; color: red";
          tip.textContent = "我是提示文字";
          tip.style.top = rect.bottom + "px";
          tip.style.left = rect.left + "px";
          document.body.appendChild(tip);
      }
      button.onclick = function() {
          showTips();
      }
  </script>
```
但是这个例子, 如果内容出现滚动条时, 提示语的位置, 也会随之变动. 如果我们想让他一直保持在原来的位置, 那我们就需要的是获取position: absolute的left, top或者right, bottom
## document坐标

### 针对于事件机制坐标
相对于document的坐标, 是从文档的左上角算起, 不是窗口, 在CSS中, window相对于position:fixed, 而document则是position:absolute, 它俩也就得区别对待.
在window中获取坐标clientX, clientY, 在document中使用pageX, pageY. 他们俩有什么不一样呢?
>1. 没有滚动条时, 它俩的坐标是一样的
>2. 有滚动条时, 它俩也就不一样了

#### e.clientX, e.clientY  - 针对浏览器可视窗口,点击所在位置到可视窗口的原点处


#### e.pageX, e.pageY  - 针对内容占用区域, 点击所在位置到文档原点处


#### e.screenX, e.screenY - 针对显示器屏幕, 点击所在位置到屏幕的原点处


#### e.layerX, e.layerY -  针对内容占用区域, 点击所在位置到文档原点处


#### e.x, e.y -  针对浏览器可视窗口,点击所在位置到可视窗口的原点处


#### e.offsetX, e.offsetY - 针对当前点击所在位置到最近目标对象的原点而言

### 正对于DOM坐标机制
#### elem.clientTop, elem.clientLeft

#### elem.offsetTop, elem.offsetLeft, elem.offsetParent


#### elem.scrollLeft, elem.scrollTop


##width, height

####window
innerWidth, innerHeight
outerWidth, outerHeight
screen.availWidth, screen.availHeight
screen.width, screen.height

####document
elem.clientWidth, elem.clientHeight
elem.offsetWidth, elem.offsetHeight
elem.scrollWidth, elem.scrollHeight
elem.getBoundingClientRect().width, elem.getBoundingClientRect().height
getComputedStyle(elem).width, getComputedStyle(elem).height

##scroll
####window
scroll(), scrollBy(), scrollTo()
scrollIntoView()
####document
scrollTop, scrollLeft - 可读写属性
