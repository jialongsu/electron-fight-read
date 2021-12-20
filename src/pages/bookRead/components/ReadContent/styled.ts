import { Button } from 'antd';
import styled from '@/configs/styledComponents';

export const Content = styled.div`
  margin: 0 120px;
  background-color: ${({ theme }) => theme.readContentBgColor};
  padding: 25px 60px 100px 60px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textColor};
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.textColor};
  text-indent: 30px;
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
`;

export const StyledButton = styled(Button)`
  width: 100px;
  margin: 0 30px;
`;
