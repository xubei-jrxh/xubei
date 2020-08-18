import Login from '../page/Login.vue'
import Reg from '../page/Reg.vue'
import Goods from '../page/Goods.vue'
import SourceShop from '../page/SourceShop.vue'
export default [
  {
    path: '/',
    component: Goods
  },
  // 登录
  {
    path: '/login',
    component: Login
  },
  // 注册
  {
    path: '/reg',
    component: Reg
  },
  // 店铺列表
  {
    path: '/goods',
    component: Goods
  },
  //当前店铺
  {
    path: '/shop',
    component: SourceShop
  }
]