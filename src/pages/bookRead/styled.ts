import styled from '@/configs/styledComponents';

interface IContainer {
  bgColor: string | undefined;
  isUseDarkModel: boolean;
}

export const Container = styled.div<IContainer>`
  background-color: ${({ bgColor, isUseDarkModel, theme }) => (
    isUseDarkModel ? theme.bodyBgColor : (bgColor || 'hsla(0,0%,100%,.3)'))};
`;
