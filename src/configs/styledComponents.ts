import * as styledComponents from 'styled-components';
import { ITheme } from './themeStyled';

// type ElType = keyof JSX.IntrinsicElements | React.ComponentType<any>;

const {
  default: styled,
  css,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ITheme>;

// // 限制行数
// const maxLine = (
//   _styledComponent: styledComponents.StyledComponent<ElType, ITheme, { line: number; }>,
// ) => styled(_styledComponent)`
//   overflow: hidden;
//   text-overflow: ellipsis;
//   display: -webkit-box;
//   -webkit-line-clamp: 1;
//   -webkit-box-orient: vertical;
// `;

export { css, ThemeProvider, createGlobalStyle };
export default styled;
