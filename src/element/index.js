import { Button, Switch } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Switch)
  }
}
export default element