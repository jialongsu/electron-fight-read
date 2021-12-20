import styled from '@/configs/styledComponents';

interface IIcon {
  Icon: React.ForwardRefExoticComponent<any>;
}

export const StyledBox = styled.li`
  width: 70px;
  height: 70px;
  background: hsla(0,0%,100%,.5);
  border-radius: 6px;
  color: ${({ theme }) => theme.textMinorColor};
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`;

const IconView = ({ Icon, ...props }: IIcon) => (<Icon {...props} />);

export const StyledIcon = styled(IconView)<IIcon>`
  font-size: 18px;
  margin-bottom: 2px;
`;
