const db = require('../config/db.js');
const Sequelize = db.sequelize;
const Setu = Sequelize.import('../schema/article.js')
Setu.sync({force: false});

class SetuModel {
    /**
    * 创建色图模型
    * @param data
    * @returns {Proise<*>}
    */
    static async createSetu(data) {
        return await Setu.create({
            url: data.url,
            pid: data.pid,
            uid: data.uid,
            title: data.title,
            author: data.author,
            tag: data.tag,
        })
    }

    /**
    * 查询色图信息
    * @param id 色图id
    * @returns {Promise<Model>}
    */
   static async getSetuDetail(id) {
       return await Setu.findOne({
           where: {
               id,
           }
       })
   }

    /**
    * 删除色图
    * @param id 色图id
    * @returns {Promise<Model>}
    */
   static async delSetuDetail(id) {
    return await Setu.destroy({
        where: {
            id,
        }
    })
  }

    /**
    * 更新色图
    * @param id 色图id
    * @returns {Promise<Model>}
    */
   static async updateSetuDetail(id, data) {
    return await Setu.update({
        url: data.url,
        pid: data.pid,
        uid: data.uid,
        title: data.title,
        author: data.author,
        tag: data.tag,
    },{
        where: {
        id,
        }
    })
  }
}

module.exports = SetuModel