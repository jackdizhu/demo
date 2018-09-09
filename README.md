# 常用方法

* log 方法

``` js
// 时间处理
// 格林威治时间与 本地 时间转换
new Date('2018-08-29T08:25:55.000Z').toLocaleString()
moment('2018-08-29T08:25:55.000Z').format('YYYY-MM-DD HH:mm:ss')
// 常用 log 方法
let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}

// 控制台批量点击
function clickAll () {
  let _arr = document.querySelectorAll('.Button.TopstoryItem-rightButton')
  for (let i = 0; i < _arr.length; i++) {
    _arr[i].click()
  }
}
clickAll()

// 复制表单
(() => {
  let inArr = document.querySelectorAll('input') || []
  let inArr2 = document.querySelectorAll('textarea') || []
  let inArr3 = document.querySelectorAll('select') || []
  let data = []
  for (let i = 0; i < inArr.length; i++) {
    inArr[i].getAttribute('value')
    data.push({
      id: '#' + inArr[i].getAttribute('id'),
      type: 'input',
      value: inArr[i].value
    })
  }
  for (let i = 0; i < inArr2.length; i++) {
    inArr2[i].getAttribute('value')
    data.push({
      id: '#' + inArr2[i].getAttribute('id'),
      type: 'textarea',
      value: inArr2[i].value
    })
  }
  for (let i = 0; i < inArr3.length; i++) {
    inArr3[i].getAttribute('value')
    data.push({
      id: '#' + inArr3[i].getAttribute('id'),
      type: 'select',
      value: inArr3[i].value
    })
  }
  console.log(JSON.stringify(data))
})()
// 表单赋值
(() => {
  let data = [] // console.log(JSON.stringify(data))
  for (let i = 0; i < data.length; i++) {
    if (data[i].type === 'input' || data[i].type === 'textarea') {
      let ele = document.querySelector(data[i].id)
      ele && ele.setAttribute('value', data[i].value)
    } else if (data[i].type === 'select') {
      let arr = document.querySelectorAll(data[i].id + ' option' ) || []
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] && arr[j].value === data[i].value) {
          arr[j].setAttribute('selected', true)
        }
      }
    }
  }
})()
```

* 正则
``` js
// 匹配 html 标签
/</?[a-z]+( [ 0-9a-z="-]+)?>/g
```

# vue_原理实现

* 简单通过 Object.defineProperty 定义 get set 方法数据劫持
* 通过 render 渲染数据
* 增加 render innerHTML 赋值缓存
* http.js 增加 ajax 缓存
* 优化减少 render 调用次数

前端笔记 vue + vuex + vue-router + axios + easy-mock

gulp + webpack 完成 less 编译 js css 打包

https://github.com/jackdizhu/html_demo

https://jackdizhu.github.io/html_demo

# 特殊符号

⎛ ◜⦿ ⏝⏝ ⦿◝⎞

😄😃😀😊😉😍😘😚😗😙😜😝😛😳😁😔😌😒😞😣😢😂😭😪😥😰😅😓😩😫😨😱😠😡😤😖😆😋😷😎😴😵😲😟😦😧😈👿😮😬😐😕😯😶😇😏😑

