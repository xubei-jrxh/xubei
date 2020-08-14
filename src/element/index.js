import { Button, Switch, Tooltip } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Switch)
    Vue.use(Tooltip)
  }
}
export default element