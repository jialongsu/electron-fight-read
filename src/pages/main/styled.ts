import {
  NavLink as RouterNavLink,
  Link,
} from 'react-router-dom';
import styled from '@/configs/styledComponents';

export const Container = styled.header`
  height: 100%;
`;

export const Header = styled.header`
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.headerBgColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 100px;
  }

  & div {
    display: flex;
    align-items: center;
  }
`;

export const Nav = styled.header`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin-left: 46px;
`;

export const NavLink = styled(RouterNavLink)`
  height: 100%;
  color: ${(props) => props.theme.textColor};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;

  &.active {
    color: ${(props) => props.theme.primaryColor};
  }

  &.active::after{
    content: ' ';
    height: 3px;
    width: 33px;
    background-color: ${(props) => props.theme.primaryColor};
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
`;

export const MainContent = styled.main`
  height: 100%;
  padding: 50px 40px;
  background-color: ${(props) => props.theme.bodyBgColor};
`;

export const StyledLink = styled(Link)`
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;
