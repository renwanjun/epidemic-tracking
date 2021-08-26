export declare interface MenuItem {
  name: string; // 显示名称
  key?: string | number; // 唯一值
  path?: string; // 匹配路由
  icon?: any; // 图标
  children?: MenuItem[]; // 子菜单
  parent?: string | number;
}
