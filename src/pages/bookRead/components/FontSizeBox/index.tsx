import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontColorsOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { changeFontSize, selectFontSize } from '@/stores/bookReadStore';
import { StyledInput, StyledInputBtn, InputTextContainer } from './styled';
import Box from '../Box';

const FontSizeBox: FC = () => {
  const minFontSize = 16;
  const maxFontSize = 30;
  const currentFontSize = useSelector(selectFontSize);
  const dispatch = useDispatch();

  const onChangeFontSize = (type: number) => {
    const newSize = type === 0
      ? Math.max(minFontSize, currentFontSize - 2)
      : Math.min(maxFontSize, currentFontSize + 2);
    dispatch(changeFontSize(newSize));
  };

  const renderBtn = (type: number, text: string, isDisable: boolean) => (
    <StyledInputBtn
      type='button'
      $isDisable={isDisable}
      onClick={() => onChangeFontSize(type)}
    >
      {text}
    </StyledInputBtn>
  );

  const content = (
    <StyledInput>
      {renderBtn(0, 'A-', currentFontSize <= minFontSize)}
      <InputTextContainer>{currentFontSize}</InputTextContainer>
      {renderBtn(1, 'A+', currentFontSize >= maxFontSize)}
    </StyledInput>
  );

  return (
    <Popover placement='left' title='调整字号' content={content} trigger='click'>
      <Box name='字号' icon={FontColorsOutlined} />
    </Popover>
  );
};

export default memo(FontSizeBox);
