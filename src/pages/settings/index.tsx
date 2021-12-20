import { FC } from 'react';
import {
  Container,
} from './styled';
import Content from './components/Content';
import LeftToolBar from './components/LeftToolBar';

const Settings: FC = () => (
  <Container>
    <LeftToolBar />
    <Content />
  </Container>
);

export default Settings;
