import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import styled from "styled-components";
import "./index.less";
import AdminMenu from "./Menu";
import AdminHeader from "../header";
const { Content, Footer, Sider } = Layout;

const Logo = styled.div`
  display: inline-block;
  position: relative;
  div {
    float: left;
  }
  .red {
    position: relative;
    top: 14px;
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    border-color: rgb(255, 77, 77);
    border-width: 2px;
    border-style: solid;
  }
  .blue {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 9px;
    background-color: transparent;
    border-color: rgb(77, 160, 255);
    border-width: 3px;
    border-style: solid;
  }
  .yellow {
    position: relative;
    top: 23px;
    right: 13px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: rgb(255, 162, 77);
  }
`;

declare interface layoutState {
  breadcrumb: string[];
}
class AdminLayout extends Component<any, layoutState> {
  constructor(props: object) {
    super(props);
    // console.log(props);
    this.state = {
      breadcrumb: [],
    };
  }
  setBreadcrumb = (breadcrumb: string[], path?: string) => {
    this.setState({
      breadcrumb,
    });
  };
  render() {
    return (
      <Layout className="admin-layout">
        <Sider
          className={"ant-layout-sider-self"}
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo">
            <Logo>
              <div className="red"></div>
              <div className="blue"></div>
              <div className="yellow"></div>
            </Logo>
            疫情实时追踪
          </div>
          {/* 菜单 */}
          <AdminMenu {...this.props} onSelect={this.setBreadcrumb} />
        </Sider>
        <Layout className="body-layout">
          {/* 头部 */}
          <AdminHeader {...this.props}></AdminHeader>
          {/* 面包屑 */}
          <Breadcrumb
            style={{ margin: "10px 20px", textAlign: "left" }}
            separator="/"
          >
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            {this.state.breadcrumb.map((name, index) => (
              <Breadcrumb.Item key={index} href="">
                {name}
              </Breadcrumb.Item>
            ))}
            {/* <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
            <Breadcrumb.Item href="">Application List</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content style={{ margin: "0 20px" }}>
            {/* <div
              className="site-layout-background"
              style={{ minHeight: "100%" }}
            > */}
            {this.props.children}
            {/* </div> */}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default AdminLayout;
