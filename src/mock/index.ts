// 使用 Mock
var Mock = require("mockjs");
var data = Mock.mock("/test", "post", {
  "userinfo|4": [
    {
      //生成四个如下格式的数据
      "id|+1": 1, //数字从1开始，后续依次加1
      name: "@cname", //名字为随机中文名
      "age|18-28": 25, //年龄是18-28之间的随机数
      "sex|1": ["男", "女"], //性别是数组里的随机一项
      "job|1": ["web", "teacher", "python", "php"], //job是数组里的随机一项
    },
  ],
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|1-10": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
    },
  ],
});
// 输出结果
// console.log(JSON.stringify(data, null, 4));

export default data;
export * from "./user";
