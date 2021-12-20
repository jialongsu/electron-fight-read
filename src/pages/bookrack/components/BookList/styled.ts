import { PlusOutlined, CheckCircleFilled as AntCheckCircleFilled } from '@ant-design/icons';
import styled from '@/configs/styledComponents';
import { maxLine } from '@/styles/utilsStyled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const BookItemContainer = styled.div`
  width: 160px;
  padding: 16px 15px;
  margin: 0 13px 12px 0;
`;

export const BookCover = styled.div.attrs(() => ({ line: 1 }))`
  width: 100%;
  height: 173px;
  border-radius: 6px;
  border: 1px solid rgba(0,0,0,.08);
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const BookName = styled.div.attrs(() => ({ line: 1 }))`
  font-weight: 500;
  font-size: 15px;
  margin: 12px 0;
  color: ${(props) => props.theme.textColor};
  ${() => maxLine}
`;

export const BookInfo = styled.div.attrs(() => ({ line: 1 }))`
  font-size: 11px;
  color: #b3b3b3;
  ${() => maxLine}
`;

export const AddView = styled(PlusOutlined)`
  font-size: 36px;
  color: #ddd;
`;

export const CheckCircleFilled = styled(AntCheckCircleFilled)<{ $isChecked: boolean; }>`
  font-size: 18px;
  color: ${(props) => (props.$isChecked ? props.theme.primaryColor : '#d9d9d9')};
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgb(253, 249, 249);
  border-radius: 50%;
`;
