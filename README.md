# db-model-schema-example-nodejs

# run project

0. install dependencies `npm install`
1. createdb ` npm run createdb`
2. copy sql file to container `npm run copysql`
3. migrate sql to db `npm run migrate`
4. run app `npm start`

# details:

- controller: src/controller
- dao: src/dao/
- model: src/models/

# db first implementation flow

1. db schema 決定好
2. 定義好 model
3. 封裝 dao
4. controller 去呼叫 dao

# 備註

- 自己是會再多個 service 層出來, 把業務邏輯獨立出來, 不過這 repo 保持簡單就先沒有做了
