# mongodb

``` js
// mongodb 原生方法
// 插入数据 一条 多条
db.collection("table").insertOne({})
db.collection("table").insertMany([{}, {}])
// 查询多条数据 where 查询条件
db.collection("table").find(where)
// 更新数据 一条 多条 where 查询条件 update 更新数据
db.collection("table").updateOne(where, update)
db.collection("table").updateMany(where, update)
// 删除数据 一条 多条
db.collection("table").deleteOne(where)
db.collection("table").deleteMany(where)
// 排序
sort({ type: 1 }) // 按 type 字段升序
sort({ type: -1 }) // 按 type 字段降序
// 查询分页
limit(2) // 读取两条数据
// 跳过指定条数
skip(2) // 跳过前面两条数据
// 删除集合
db.collection("table").drop()
```

# mongodb 表关联 $lookup

* product

| _id | product_name   | price  |
| --- | ---  | ---  |
|   1   |   商品1   |   15.0   |
|   2   |   商品2   |   25.0   |

* orders

| _id | pid   | order_name  |
| --- | ---  | ---  |
|   1   |   1   |   订单1   |
|   2   |   2   |   订单2   |
|   3   |   1   |   订单1   |
|   4   |   2   |   订单2   |

``` js
/*
  from: 需要关联的表【orders】
  localField: 【product】表需要关联的键。
  foreignField: 【orders】的matching key。
  as:  对应的外键集合的数据
  $match: where条件 查询 price > 20 的数据
*/
db.product.aggregate([
    {
      $lookup:
        {
          from: "orders",
          localField: "_id",
          foreignField: "pid",
          as: "inventory_docs"
        }
   },
   { $match : { price : {$gt:20} } }
])
```

# mongoose 表关联 populate

User：

``` js
{
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}
```
Article：

``` js
{
  title: {type: String, required: true},
  content: {type: String, required: true},
  created_time: {type: Date, default: Date.now},
  // _user字段是关键，使用ref，将其与User关联
  _user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
  }
}
```
调用 populate 会将其关联的User一并查出
``` js
Article.findById('articleId').populate('_user')
```