import Detail from '@/pages/Detail'
import Search from '@/pages/Search'
export default [
  {
    path: '/goods_details',
    component: Detail,
    name: 'detail'
  },
  {
    path: '/',
    component: Search
  }
]