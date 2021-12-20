import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '@/assets/images/logo.png';
import {
  Container,
  Header,
  NavLink,
  MainContent,
  Nav,
  StyledLink,
} from './styled';

const Main: FC = () => {
  const navList = [
    { path: '/', title: '首页' },
    { path: '/bookrack', title: '书架' },
  ];

  return (
    <Container>
      <Header>
        <div>
          <img src={logo} alt='' />
          <Nav>
            {
            navList.map((item) => {
              const { path } = item;
              return (
                <NavLink key={path} to={path}>
                  {item.title}
                </NavLink>
              );
            })
          }
          </Nav>
        </div>
        <StyledLink to='/settings'>设置</StyledLink>
      </Header>
      <MainContent>
        <Outlet />
      </MainContent>
    </Container>
  );
};

export default Main;
