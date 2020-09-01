import { h } from 'snabbdom/src/package/h'
import { init } from 'snabbdom/src/package/init'

// 1. 导入模块
import { styleModule } from 'snabbdom/src/package/modules/style'
import { eventListenersModule } from 'snabbdom/src/package/modules/eventlisteners'

// 2. 注册模块
const patch = init([
  styleModule,
  eventListenersModule,
])

// 3. 使用 h() 函数的第二个参数传入模块需要的数据（对象）
let vnode = h('div', {
  style: {
    backgroundColor: '#4fc08d',
    color: '#35495d'
  },
  on: {
    click: eventHandler
  }
}, [
  h('h1', 'Hello Snabbdom'),
  h('p', 'This is p tag')
])

function eventHandler() {
  console.log('clicked.')
}

const app = document.getElementById('app')
patch(app, vnode)