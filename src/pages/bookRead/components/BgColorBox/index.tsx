import { FC } from 'react';
import { BgColorsOutlined, CheckOutlined } from '@ant-design/icons';
import { Popover } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeBackgroundColor, selectBackgroundColor } from '@/stores/bookReadStore';
import { ItemContainer, ItemBox, ItemIcon } from './styled';
import Box from '../Box';

const BgColorBox: FC = () => {
  const bgColors = [
    { id: 1, color: '#E0E0E0' },
    { id: 2, color: '#DED9C6' },
    { id: 3, color: '#E6EFE4' },
    { id: 4, color: '#F6EFEF' },
    { id: 5, color: '#D9E0E8' },
    { id: 6, color: '#191919' },
  ];
  const currentBgColor = useSelector(selectBackgroundColor) || bgColors[0].color;
  const dispatch = useDispatch();

  const onTapItem = (color: string) => {
    dispatch(changeBackgroundColor(color));
  };

  const content = (
    <ItemContainer>
      {
        bgColors.map((item) => {
          const isActive = currentBgColor === item.color;
          return (
            <ItemBox
              key={item.id}
              $isActive={isActive}
              style={{ backgroundColor: item.color }}
              onClick={() => onTapItem(item.color)}
            >
              {isActive && <ItemIcon Icon={CheckOutlined} />}
            </ItemBox>
          );
        })
      }
    </ItemContainer>
  );

  return (
    <Popover placement='left' title='阅读背景' content={content} trigger='click'>
      <Box name='背景' icon={BgColorsOutlined} />
    </Popover>
  );
};

export default BgColorBox;
