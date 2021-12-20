import styled from '@/configs/styledComponents';

export const StyledContent = styled.div`
  height: 100%;
  margin: 0 120px;
  background-color: ${({ theme }) => theme.readContentBgColor};
  padding: 25px 60px 100px 60px;
`;
