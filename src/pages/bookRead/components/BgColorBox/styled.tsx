import styled, { css } from '@/configs/styledComponents';

interface IIcon {
  Icon: React.ForwardRefExoticComponent<any>;
}

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const border = css`
  border: 1px solid ${(props) => props.theme.primaryColor};
`;

export const ItemBox = styled.div<{ $isActive: boolean; }>`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  margin: 0 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ $isActive }) => $isActive && border}
`;

const IconView = ({ Icon, ...props }: IIcon) => (<Icon {...props} />);

export const ItemIcon = styled(IconView)<IIcon>`
  color: ${(props) => props.theme.primaryColor};
`;
