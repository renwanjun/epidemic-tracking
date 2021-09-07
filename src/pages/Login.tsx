// import { useSelector, useDispatch, connect } from "react-redux";
// import { AppDispatch, RootState } from "@/store"; // 用下面的替换
import { useState } from "react";
import { Form, Input, Checkbox, Button, Row, Col, message } from "antd";
import { connect, ConnectedProps } from "react-redux";
import { useAppSelector, useAppDispatch } from "@/hook";
import { RouteConfig } from "react-router-config";
import { User } from "@/interfaces/user";
import { increment, decrement, incrementByAmount } from "@/reducers/counter";
import { overrideStateProps, login } from "@/reducers/login";
// interface RootState {
//   counter: number;
//   login: User;
// }

const mapState = (state: any) => ({
  counter: state.counter,
  user: state.login,
});
// 对象形式
const mapDispatch = {
  increment: () => increment(),
  decrement: () => decrement(),
  incrementByAmount: (num: number) => incrementByAmount(num),
  update: (payload: any) => overrideStateProps(payload),
  login: (params: User) => login(params),
};

// 函数形式
// const mapDispatch = (dispatch: any) => ({
//   increment: () => {
//     dispatch(increment());
//   },
//   decrement: () => {
//     dispatch(decrement());
//   },
//   incrementByAmount: (num: number) => {
//     dispatch(incrementByAmount(num));
//   },
//   update: (payload: any) => {
//     console.log(payload);
//     dispatch(overrideStateProps(payload));
//   },
// });

const connector = connect(mapState, mapDispatch);
// The inferred type will look like:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & RouteConfig;
function Login(props: Props) {
  const { history } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(props);
  // const count = useAppSelector(state => state.counter);
  // const dispatch = useAppDispatch();

  // function login() {
  //   // history.push("/");
  // }
  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      await props.login({ username, password });
      await new Promise(resolve => setTimeout(resolve, 1000));
      history.push("/home");
    } catch (err) {
      console.error("Failed to login: ", err);
    } finally {
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
      }}
    >
      <Row>
        <Col span={12} offset={6}>
          <Form
            name="basic"
            labelCol={{ span: 3 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input onChange={e => setUsername(e.target.value)} />
              {/* {username} */}
            </Form.Item>

            <Form.Item
              label="Password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password onChange={e => setPassword(e.target.value)} />
              {/* {password} */}
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default connector(Login);
// export default Login;
