export interface ITheme {
  primaryColor: string;
  bodyBgColor: string;
  bodySecondaryBgColor: string;
  componentBgColor: string;
  readContentBgColor: string;
  headerBgColor: string;
  btnBgColor: string;
  btnText: string;
  borderColor: string;
  textColor: string;
  textMinorColor: string;
}

// 蓝色主题
const blueTheme: ITheme = {
  primaryColor: '#0bafff', // 主色调
  bodyBgColor: '#fff', // <body>背景色
  bodySecondaryBgColor: '#f5f5f5', // <body>背景色
  componentBgColor: '#fff', // 组件背景色
  readContentBgColor: 'hsla(0,0%,100%,.5)', // 阅读内容背景色
  headerBgColor: '#F7F7F9', // 页头背景色
  btnBgColor: '#0bafff', // 按钮颜色
  btnText: '#fff', // 按钮颜色
  borderColor: '#f2f2f2', // 分割线颜色
  textColor: '#333', // 文字颜色
  textMinorColor: '#666', // 次要文字颜色
};

// 暗黑主题
const darkTheme: ITheme = {
  primaryColor: '#0bafff', // 主色调
  bodyBgColor: '#191919', // <body>背景色
  bodySecondaryBgColor: '#191919', // <body>背景色
  componentBgColor: '#262626', // 组件背景色
  readContentBgColor: '#262626', // 阅读内容背景色
  headerBgColor: '#262626', // 页头背景色
  btnBgColor: '#262626', // 按钮颜色
  btnText: '#8c8c8e', // 按钮颜色
  borderColor: '#696a6c', // 分割线颜色
  textColor: '#ebebec', // 文字颜色
  textMinorColor: '#DBD0D7', // 次要文字颜色
};

export default {
  blueTheme,
  darkTheme,
};
