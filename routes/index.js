const Router = require('koa-router')
const SetuControlloer = require('../controllers/article.js')

const router = new Router({
  prefix: '/kira'
})

/**
 * 色图接口
 */
// 创建色图接口(路由)
router.post('/setu', SetuControlloer.create);
// 获取色图接口(路由)
router.get('/setu/:id', SetuControlloer.detail);
// 删除色图接口(路由)
router.delete('/setu/del/:id', SetuControlloer.del);
// 更新色图接口(路由)
router.put('/setu/update/:id', SetuControlloer.update);
// 按关键词搜索接口(路由) 未完成
module.exports = router
