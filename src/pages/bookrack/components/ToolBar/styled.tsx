import { Button as AntdButton } from 'antd';
import styled from '@/configs/styledComponents';

export const ToolBarContainer = styled.div`
  padding: 35px 15px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled(AntdButton)`
  width: 80px;
  font-size: 12px;
  border-width: 0;
  background-color: ${(props) => props.theme.btnBgColor};
`;

export const EditContainer = styled.div`
 display: flex;
`;
