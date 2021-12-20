import styled from '@/configs/styledComponents';

export const StyledInput = styled.div`
  height: 50px;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #333;
`;

export const StyledInputBtn = styled.button<{ $isDisable: boolean; }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background: transparent;
  padding: 0 15px;
  color: ${({ $isDisable }) => ($isDisable ? '#b2b2b2' : '#333')};
`;

export const InputTextContainer = styled.span`
  flex: 1;
  font-size: 12px;
  border-left: 1px solid #333;
  border-right: 1px solid #333;
  text-align: center;
`;
