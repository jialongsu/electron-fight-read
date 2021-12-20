import { css } from '@/configs/styledComponents';

export const maxLine = css<{ line: number; }>`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.line};
  -webkit-box-orient: vertical;
`;
