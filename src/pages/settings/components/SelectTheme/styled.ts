import styled from '@/configs/styledComponents';

export const StyledContent = styled.div`
  height: 50px;
  display: flex;
  align-items: center;

  #label {
    color: ${({ theme }) => theme.textColor};
  }
`;
