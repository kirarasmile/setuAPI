# setuAPI
## 一个koa实现的简单数据库增删改查轻量级api，主要供bot使用
## 技术栈
* koa
* sequelize
* mysql
## todo
* 按照tag/画师查找图片
* 提升可用性
## 部署
npm install<br>
npm start
## api概述
目前只有四个api可用
* http://localhost:3000/kira/setu/id
    * 使用<b>GET</b>，输入图片在数据库内的id查找图片，返回如下图<br>
<img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/setu-koa/1.png">
* http://localhost:3000/kira/setu
    * 使用<b>POST</b>，输入图片信息将其数据存入数据库内，key如下图<br>
    <img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/setu-koa/2.png">
* http://localhost:3000/kira/setu/del/id
    * 使用<b>DELETE</b>，输入图片在数据库内的id删除图片，返回如下图<br>
    <img src="https://cdn.jsdelivr.net/gh/kirarasmile/smilecli-tools-ImageHosting/img/githubrep/setu-koa/3.png">
* http://localhost:3000/kira/setu/update/id
    * 使用<b>PUT</b>，输入图片信息将其位于数据库内的数据更新，key同创建的api<br>
    