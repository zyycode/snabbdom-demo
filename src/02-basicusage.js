import { h } from 'snabbdom/src/package/h'
import { init } from 'snabbdom/src/package/init'

// div 元素放置子元素 h1 p
const patch = init([])

let vnode = h('div#container', [
  h('h1', 'Hello Snabbdom'),
  h('p', 'This is p tag')
])

const app = document.getElementById('app')

let oldVNode = patch(app, vnode)

setTimeout(() => {
  vnode = h('div#container', [
    h('h1', 'Hello World'),
    h('p', 'Hello P')
  ])
  patch(oldVNode, vnode)

  // 清空页面元素 - 错误写法
  // patch(oldVNode, null)
  patch(oldVNode, h('!'))
}, 2000)