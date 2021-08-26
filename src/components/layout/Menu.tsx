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
import menuList, { MenuItem, BreadcrumbNameMap } from "../../common/menu";

const { SubMenu } = Menu;

declare interface MenuListProps {
  readonly list: MenuItem[];
  menuLength?: number;
  subMenuLength?: number;
}

// @withRouter

// const MenuMap = new Map();

function AdminMenu({ history, location, onSelect }: any) {
  // 初始化
  let { pathname } = location;
  let defaultSelectedKey: string = pathname;
  let defaultOpenKey: string = "/overall";

  let menuLength = 0,
    subMenuLength = 0,
    list = menuList;

  // 渲染后
  useEffect(() => {
    onSelect(breadcrunmbPath);
  }, []);
  // const keyPath = useMemo(
  //   () => [defaultSelectedKey, defaultOpenKey],
  //   [defaultSelectedKey]
  // );
  const breadcrunmbPath = useMemo(() => {
    let keyPath = [defaultSelectedKey, defaultOpenKey];
    return keyPath.map((key: string) => BreadcrumbNameMap.get(key)).reverse();
  }, [defaultSelectedKey, defaultOpenKey]);

  // 根据初次跳转的路由设置默认选中的菜单
  const menuOnSelect = ({ keyPath, selectedKeys }: any) => {
    onSelect(breadcrunmbPath);
  };
  // 路由跳转

  // const go = ({ item, key, keyPath, domEvent }: any) => {
  //   // console.log(key, keyPath);
  //   let path = key;
  //   path && history.push(path); //编程式导航
  // };
  // const go = (path: string | boolean) => {
  //   path && history.push(path); //编程式导航
  // };
  // onSelect(breadcrunmbPath);
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
