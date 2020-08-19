import {
  Button,
  Switch,
  Select,
  Icon,
  Tabs,
  TabPane,
  Carousel,
  CarouselItem,
  Divider,
  Collapse,
} from "element-ui";
const element = {
  install: function(Vue) {
    Vue.use(Button);
    Vue.use(Switch);
    Vue.use(Select);
    Vue.use(Icon);
    Vue.use(Tabs);
    Vue.use(TabPane);
    Vue.use(Carousel);
    Vue.use(CarouselItem);
    Vue.use(Divider);
    Vue.use(Collapse);
  },
};
export default element;
