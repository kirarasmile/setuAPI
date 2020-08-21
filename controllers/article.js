const SetuModel = require('../modules/article.js')

class setuController {
    /**
     * 创建文章
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        //接受客户端
        let req = ctx.request.body;
        if (req.url
            && req.pid
            && req.uid
            && req.title
            && req.author
            && req.tag) {
                try{
                    // 创建色图模型
                    const ret = await SetuModel.createSetu(req);
                    // 把刚刚新建的色图ID查询色图详情，且返回新创建的色图信息
                    const data = await SetuModel.getSetuDetail(ret.id);
                    ctx.response.status = 200;
                    ctx.body = {
                        code: 200,
                        msg: '创建色图成功~',
                        data
                    }
                } catch(err) {
                    ctx.response.status = 412;
                    ctx.body = {
                        code: 200,
                        msg: '创建色图失败',
                        data: err
                    }
                }
            } else {
                ctx.response.status = 416;
                ctx.body = {
                    code: 200,
                    msg: '参数不全',
                }
            }
    }

    /**
     * 获取色图详情
     * @param ctx
     * @return {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 查询色图详情模型
                let data = await SetuModel.getSetuDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '查询成功~',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '创建色图失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '色图id不见了',
            }
        }
    }

    /**
     * 删除色图
     * @param ctx
     * @return {Promise.<void>}
     */
    static async del(ctx) {
        let id = ctx.params.id;

        if (id) {
            try {
                // 删除色图详情模型
                let data = await SetuModel.delSetuDetail(id);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '删除成功~',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '删除色图失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '色图id不见了',
            }
        }
    }

    /**
     * 更新色图
     * @param ctx
     * @return {Promise.<void>}
     */
    static async update(ctx) {
        let id = ctx.params.id;
        let req = ctx.request.body;
        if (id
            &&req.url
            && req.pid
            && req.uid
            && req.title
            && req.author
            && req.tag) {
            try {
                // 更新色图详情模型
                let data = await SetuModel.updateSetuDetail(id, req);
                ctx.response.status = 200;
                ctx.body = {
                    code: 200,
                    msg: '更新成功~',
                    data
                }
            } catch (err) {
                ctx.response.status = 412;
                ctx.body = {
                    code: 200,
                    msg: '更新色图失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416;
            ctx.body = {
                code: 200,
                msg: '色图id不见了',
            }
        }
    }

    
}


module.exports = setuController