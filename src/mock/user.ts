// 使用 Mock
var Mock = require("mockjs");
const user = {
  username: "admin",
  roles: "admin",
};

var data = Mock.mock("/user/login", "post", {
  status: 200,
  msg: "success",
  data: {
    token: "dsfdsfdsfdfd",
    user,
  },
});

Mock.mock("/user/register", "post", {
  status: 200,
  msg: "success",
  data: {
    username: "admin",
  },
});

Mock.mock("/user", "get", {
  status: 200,
  msg: "success",
  data: user,
});
// 输出结果
// console.log(JSON.stringify(data, null, 4));

export default data;
