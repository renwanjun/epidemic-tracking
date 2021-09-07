import React from "react";
import { Avatar, Menu, Dropdown, message } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { Link } from "react-router-dom";

import { useAppSelector } from "@/hook";
import { selectUsername } from "@/reducers/login";

const onClick = ({ key }: any) => {
  switch (parseInt(key)) {
    case 3:
      localStorage.removeItem("token");
      break;
    default:
      message.info(`Click on item ${key}`);
  }
};

const menu = function () {
  return (
    <Menu onClick={onClick}>
      <Menu.Item key="1">个人中心</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">
        <Link to="/login">退出登录</Link>
      </Menu.Item>
    </Menu>
  );
};

export default function AdminHeader({ history }: any) {
  const username = useAppSelector(selectUsername);
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: "0 24px", textAlign: "right" }}
    >
      <Avatar
        style={{ backgroundColor: "#87d068", marginRight: "5px" }}
        icon={<UserOutlined />}
      />
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          {username ? username : "游客"} <DownOutlined />
        </a>
      </Dropdown>
    </Header>
  );
}
