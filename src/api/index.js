import Ajax from '@/ajax/Ajax'

// 请求得到详情页数据
export const reqDetail = (goodsId) =>
  Ajax({
    url: `/detail/${goodsId}`,
    method: 'GET',
  })
