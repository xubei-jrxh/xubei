const Koa = require('koa')
const KoaRouter = require('koa-router')
const app = new Koa()
const router = new KoaRouter()
app.use(router.routes()).use(router.allowedMethods())
const indieGame = require('./datas/indieGame.json')
router.get('/indieGame', (ctx, next) => {
  ctx.body = {
    code: 200,
    data: indieGame
  }
})
app.listen(3000, () => {
  console.log('3000端口启动')
})