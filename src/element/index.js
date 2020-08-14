import { Button, Switch, Select, Icon } from "element-ui";
const element = {
  install: function (Vue) {
    Vue.use(Button);
    Vue.use(Switch);
    Vue.use(Select);
    Vue.use(Icon);
  },
};
export default element;
