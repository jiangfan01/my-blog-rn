const tintColorLight = '#007aff'; // 浅色模式的主色
const tintColorDark = '#0a84ff';  // 深色模式的主色

export const Colors = {
  light: {
    text: '#333333', // 主文本颜色
    background: '#F7F7F7', // 背景颜色（浅色）
    tint: tintColorLight, // 主要操作颜色
    icon: '#8C8C8C', // 图标颜色
    tabIconDefault: '#B0B0B0', // 默认 Tab 图标颜色
    tabIconSelected: tintColorLight, // 选中的 Tab 图标颜色
    cardBackground: '#FFFFFF', // 卡片背景色
    borderColor: '#E0E0E0', // 边框颜色
    shadowColor: 'rgba(0, 0, 0, 0.1)', // 阴影颜色
    linkColor: tintColorLight, // 链接颜色
    codeBackground: '#F4F4F4', // 代码背景
    codeText: '#333333', // 代码文本
  },
  dark: {
    text: '#ECEDEE', // 主文本颜色（深色模式）
    background: '#151718', // 背景颜色（深色）
    tint: tintColorDark, // 主要操作颜色
    icon: '#9BA1A6', // 图标颜色
    tabIconDefault: '#9BA1A6', // 默认 Tab 图标颜色
    tabIconSelected: tintColorDark, // 选中的 Tab 图标颜色
    cardBackground: '#1A1A1A', // 卡片背景色
    borderColor: '#333333', // 边框颜色
    shadowColor: 'rgba(255, 255, 255, 0.05)', // 阴影颜色
    linkColor: tintColorDark, // 链接颜色
    codeBackground: '#1E1E1E', // 代码背景
    codeText: '#F8F8F2', // 代码文本
  },
};
