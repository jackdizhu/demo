// js 触发文件下载保存 <a href="test.png" download="test.png">下载</a>
function download(href, filename = '') {
  const a = document.createElement('a')
  a.download = filename
  a.href = href
  document.body.appendChild(a)
  a.click()
  a.remove()
}
function downloadFile(url, filename = '') {
  /* 可有可无 浏览器限制 相应体必须设置 cors
    , {
      headers: new Headers({
        Origin: location.origin,
      }),
      mode: 'cors',
    }
  */
  fetch(url, {
    headers: new Headers({
      Origin: location.origin,
    }),
    mode: 'cors',
  })
    .then(res => res.blob())
    .then(blob => {
      const blobUrl = window.URL.createObjectURL(blob)
      download(blobUrl, filename)
      window.URL.revokeObjectURL(blobUrl)
    })
}

// 移动web页面，input获取焦点弹出系统虚拟键盘时，挡住input
let _dom = document.getElementById('domId')
_dom.scrollIntoView(true);
_dom.scrollIntoViewIfNeeded();

// html 文件显示 html 代码
// 普通 html标签 转译
// function HTMLEncode(html) {
//     var temp = document.createElement("div");
//     (temp.textContent != null) ? (temp.textContent = html) : (temp.innerText = html);
//     var output = temp.innerHTML;
//     temp = null;
//     return output;
// }
<noscript style="display: none;" id="pre_tpl_1" to="pre_1">
  <div><div>test</div></div>
  <textarea>aaaaaaa</textarea>
  <script sype="text/javascript">console.log('aaaaaa')</script>
</noscript>

function show_html_code(el) {
  var _el = el
  var _to = _el.getAttribute('to')
  var tpl = _el.innerHTML
  document.getElementById(_to) && (document.getElementById(_to).innerHTML = tpl)
}
(function () {
  var _noscript = document.querySelectorAll('noscript')
  for (let i = 0; i < _noscript.length; i++) {
      var _el = _noscript[i]
      console.dir(_el)
      show_html_code(_el)
  }
}())

// js 判断用户来源是否是 本网站
let isThisHost = function() {
	let doc = window.document
	let loc = window.location
	let _referrer = (doc && doc.referrer) || ''
	let host = loc && (loc.protocol + '//' + loc.host)
	let is = _referrer.indexOf(host) === -1 ? false : true
	return is
}
isThisHost()

// js 获取url get 参数
let getRequestParams = function() {
  // 获取url中"?"符后的字串
  let loc = window.location
  let url = (loc && loc.search) || ''
  let theRequest = new Object()
  if (url.indexOf('?') != -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for(let i = 0; i < strs.length; i ++) {
      theRequest[strs[i].split('=')[0]] = unescape(strs[i].split('=')[1])
    }
  }
  return theRequest
}
getRequestParams()

// window.open 打开新页面被拦截 问题处理
// chome 处理 先执行 let _window = window.open() 
// 再执行异步方法 回调 执行 _window.location = url  
// Firefox 打开 pdf 提示下载保存弹窗 同样处理
export const fnWindowOpen = function (url) {
  if (url) {
    let _window = window.open()
    setTimeout(function () {
      _window.location = url
    }, 100)

    let elA = document.createElement('a')
    let id = 'fnWindowOpen' + new Date().getTime()
    elA.setAttribute('target', '_blank')
    elA.setAttribute('href', url)
    elA.setAttribute('id', id)
    document.body.appendChild(elA)
    let a = document.querySelector(`#${id}`)
    a.click()

    let form = document.createElement('form')
    form.action = url
    form.target = '_blank'
    form.method = 'POST'
    document.body.appendChild(form)
    form.submit()
  }
}

// webpack 开发 dev css 样式正常 build 部分样式丢失
// extract-text-webpack-plugin 插件关闭
// 它将*.css条目块中的所有必需模块移动到单独的CSS文件中。
// 因此，您的样式不再内联到JS包中，而是在单独的CSS文件（styles.css）中。
// 如果你的样式表总量很大，那么它会更快，因为CSS包是与JS包并行加载的
module: {
  rules: cssUtils.styleRules({
    sourceMap: config.build.productionSourceMap,
    // extract: true, // 
    postcss: true
  })
}
// 部分css 前缀丢失问题
// optimize-css-assets-webpack-plugin
// 用于优化\最小化CSS资源
new OptimizeCSSPlugin({
  cssProcessorOptions: {
    safe: true
  }
})
