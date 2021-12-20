import { Drawer } from 'antd';
import styled from '@/configs/styledComponents';

export const ItemBox = styled.p<{ $isActive: boolean; }>`
  min-height: 48px;
  line-height: 48px;
  font-size: 14px;
  border-bottom: 0.5px dashed ${({ theme }) => theme.borderColor};
  margin-block-start: 0;
  margin-block-end: 0;
  color: ${({ $isActive, theme }) => ($isActive ? theme.primaryColor : theme.textColor)};
`;

export const StyledDrawer = styled(Drawer)`
  & .ant-drawer-header{
    background-color: ${({ theme }) => theme.componentBgColor};
    border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  }
  & .ant-drawer-content {
    background-color: ${({ theme }) => theme.componentBgColor};
  }
  & .ant-drawer-title {
    color: ${({ theme }) => theme.textColor};
  }
`;
