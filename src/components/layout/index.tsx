import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import "./index.less";
import AdminMenu from "./Menu";

import { TestContext } from "../../contexts";
const { Header, Content, Footer, Sider } = Layout;

declare interface layoutState {
  breadcrumb: string[];
}
class AdminLayout extends Component<any, layoutState> {
  constructor(props: object) {
    super(props);
    this.state = {
      breadcrumb: ["ddd", "ddd d"],
    };
    // console.log(props);
  }
  setBreadcrumb = (breadcrumb: string[]) => {
    this.setState({
      breadcrumb,
    });
  };
  render() {
    let router = this.context;
    return (
      <Layout className="admin-layout">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          {/* 菜单 */}
          <AdminMenu {...router} onSelect={this.setBreadcrumb} />
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />
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
            <div
              className="site-layout-background"
              style={{ minHeight: "100%" }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

AdminLayout.contextType = TestContext;
export default AdminLayout;
