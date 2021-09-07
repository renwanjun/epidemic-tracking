import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { Menu } from "antd";
import { withRouter, Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import menuList, { MenuItem, BreadcrumbNameMap } from "@/config/menu";

const { SubMenu } = Menu;

declare interface MenuListProps {
  readonly list: MenuItem[];
  menuLength?: number;
  subMenuLength?: number;
}

// @withRouter

// const MenuMap = new Map();

function AdminMenu({ history, location, onSelect }: any) {
  // console.log(history);
  // 初始化
  let { pathname } = location;
  const paths = pathname.match(/\/[^\/]+/g);
  let defaultSelectedKey: string = pathname;
  let defaultOpenKey: string = paths[1];

  let menuLength = 0,
    subMenuLength = 0,
    list = menuList;

  const [KeyPaths, setKeyPaths] = useState([
    defaultSelectedKey,
    defaultOpenKey,
  ]);
  // 渲染后
  useEffect(() => {
    onSelect(breadcrunmbPath(KeyPaths));
  }, []);
  const breadcrunmbPath = useCallback(
    (keyPath: string[]) =>
      keyPath.map((key: string) => BreadcrumbNameMap.get(key)).reverse(),
    [KeyPaths]
  );

  // 根据初次跳转的路由设置默认选中的菜单
  const menuOnSelect = ({ keyPath, selectedKeys }: any) => {
    // console.log(selectedKeys);
    setKeyPaths(keyPath);
    onSelect(breadcrunmbPath(keyPath), selectedKeys[0]);
  };
  // 路由跳转
  return (
    <Menu
      defaultSelectedKeys={[defaultSelectedKey]}
      defaultOpenKeys={[defaultOpenKey]}
      mode="inline"
      theme="dark"
      onSelect={menuOnSelect}
    >
      {list.map((item: MenuItem, index: number) => {
        if (item.children && item.children.length >= 0) {
          ++subMenuLength;
          return (
            <SubMenu
              key={item.key ? item.key : "sub" + subMenuLength}
              icon={<item.icon />}
              title={item.name}
            >
              {item.children.map((item, index) => {
                return (
                  // key={++menuLength}
                  <Menu.Item key={`${item.key}`} icon={item.icon}>
                    {/* {item.name} */}
                    {item.path ? (
                      <Link to={item.path?.toString()}>{item.name}</Link>
                    ) : (
                      item.name
                    )}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          ++menuLength;
          return (
            <Menu.Item key={item.key} icon={item.icon}>
              {/* {item.name} */}
              {item.path ? (
                <Link to={item.path?.toString()}>{item.name}</Link>
              ) : (
                item.name
              )}
            </Menu.Item>
          );
        }
      })}
    </Menu>
  );
}

// memo 包裹组件对它的props 进行浅比较；不比较state
export default memo(AdminMenu);
