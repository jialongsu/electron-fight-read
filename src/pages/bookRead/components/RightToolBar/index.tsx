import { FC, memo } from 'react';
import ChapterListBox from '../ChapterListBox';
import FontSizeBox from '../FontSizeBox';
import BgColorBox from '../BgColorBox';
import { StyledRightToolBar } from './styled';

const RightToolBar: FC = () => (
  <StyledRightToolBar>
    <ChapterListBox />
    <FontSizeBox />
    <BgColorBox />
  </StyledRightToolBar>
);

export default memo(RightToolBar);
