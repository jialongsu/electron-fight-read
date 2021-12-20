import {
  FC,
  memo,
} from 'react';
// import { useSelector } from 'react-redux';
import {
  StyledContent,
} from './styled';
import SelectTheme from '../SelectTheme';

const Content: FC = () => (
  <StyledContent>
    <SelectTheme />
  </StyledContent>
);

export default memo(Content);
