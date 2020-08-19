import { Button, Switch, Tooltip, Badge } from 'element-ui'
const element = {
  install: function(Vue) {
    Vue.use(Button)
    Vue.use(Switch)
    Vue.use(Tooltip)
    Vue.use(Badge)
  },
}
export default element
