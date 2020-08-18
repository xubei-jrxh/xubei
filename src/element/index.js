import { Button, Input, Card, Radio, Pagination, Checkbox } from 'element-ui'
const element = {
  install: function (Vue) {
    Vue.use(Button)
    Vue.use(Input)
    Vue.use(Card)
    Vue.use(Radio)
    Vue.use(Pagination)
    Vue.use(Checkbox)
  }
}
export default element