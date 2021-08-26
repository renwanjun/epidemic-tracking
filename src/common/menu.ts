import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { MenuItem } from "./interface";

// export declare interface SubMenuItem {
//   name: string;
//   path: string;
//   icon?: any;
//   children?: SubMenuItem[];
// }

const Menu: MenuItem[] = [
  {
    name: "疫情总揽",
    icon: MailOutlined,
    key: "/overall",
    children: [
      {
        name: "全国趋势",
        key: "/home/overall/national-trend",
        path: "/home/overall/national-trend",
        // parent: "overall",
      },
      {
        name: "省市疫情",
        key: "/home/overall/province-epidemic",
        path: "/home/overall/province-epidemic",
        // parent: "overall",
      },
    ],
  },
];

function setBreadcrumbNameMap(menu: MenuItem[], map: Map<any, string>): any {
  return menu.reduce((map, { key, name, children }: MenuItem) => {
    !map.has(key) && map.set(key, name);
    if (children && children.length >= 0) {
      setBreadcrumbNameMap(children, map);
    }
    return map;
  }, map);
}

export * from "./interface";
export default Menu;
export const BreadcrumbNameMap = setBreadcrumbNameMap(Menu, new Map());
