## 服务器创建方式：

1、现在 services 里面建数据表模型
2、然后在 models 里面建模型
3、在 controller 里面创建功能处理部分
4、最后在 routes 下 index.js 里面把对应的路由地址以及 controller 方法引入进去即可。

## 客户端请求方式：

```javascript
this.baseAxios.get("http://localhost:5000/users/1").then(data => {
  console.log(data);
});
// ttest2
this.baseAxios
  .post("http://localhost:3000/users/", {
    name: "bbbbb",
    password: "asdf12bbbb"
  })
  .then(data => {
    console.log(data);
  });
```
