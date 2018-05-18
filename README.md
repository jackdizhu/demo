# 常用方法

* log 方法

``` js
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
```

前端笔记 vue + vuex + vue-router + axios + easy-mock

gulp + webpack 完成 less 编译 js css 打包

https://github.com/jackdizhu/html_demo

https://jackdizhu.github.io/html_demo

# 特殊符号

⎛ ◜⦿ ⏝⏝ ⦿◝⎞

😄😃😀😊😉😍😘😚😗😙😜😝😛😳😁😔😌😒😞😣😢😂😭😪😥😰😅😓😩😫😨😱😠😡😤😖😆😋😷😎😴😵😲😟😦😧😈👿😮😬😐😕😯😶😇😏😑

