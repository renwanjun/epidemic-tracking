import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { MenuItem } from "@/interfaces/menu";

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
      },
      {
        name: "省市疫情",
        key: "/home/overall/province-epidemic",
        path: "/home/overall/province-epidemic",
      },
    ],
  },
  {
    name: "疫情通报",
    icon: MailOutlined,
    key: "/notices",
    children: [
      {
        name: "通报内容",
        key: "/home/notices/notices-content",
        path: "/home/notices/notices-content",
      },
      {
        name: "管理通报",
        key: "/home/notices/manage-notices",
        path: "/home/notices/manage-notices",
      },
    ],
  },
  {
    name: "防控辟谣",
    icon: MailOutlined,
    key: "/deny-rumours",
    children: [
      {
        name: "辟谣内容",
        key: "/home/deny-rumours/rumours-content",
        path: "/home/deny-rumours/rumours-content",
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
export * from "../interfaces/menu";
export default Menu;
export const BreadcrumbNameMap = setBreadcrumbNameMap(Menu, new Map());
// console.log(BreadcrumbNameMap);
