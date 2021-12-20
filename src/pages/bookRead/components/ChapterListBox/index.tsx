import {
  FC,
  useState,
  useEffect,
} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BarsOutlined } from '@ant-design/icons';
import { selectChapters, updateBookrackList } from '@/stores/bookReadStore';
import { ItemBox, StyledDrawer } from './styled';
import Box from '../Box';

const ChapterListBox: FC = () => {
  const { id = 0, page = 1 } = useParams();
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(() => Number(page) - 1);
  const chapters = useSelector(selectChapters);
  const navigate = useNavigate();

  useEffect(() => {
    // 滚动当前章节至顶部
    const el = document.getElementById(`item-${currentIndex}`);
    el && el.scrollIntoView();
  });

  const onClose = () => {
    setVisible(false);
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const onTapChapter = (index: number) => {
    setCurrentIndex(index);
    updateBookrackList(Number(id), index, 0);
    navigate(`/bookRead/${id || ''}/${index + 1}`, { replace: true });
    setVisible(false);
  };

  return (
    <>
      <Box name='目录' icon={BarsOutlined} callback={showDrawer} />
      <StyledDrawer
        title='目录'
        placement='left'
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        {
            chapters.map((item, i) => {
              const isActive = currentIndex === i;
              return (
                <ItemBox $isActive={isActive} id={`item-${i}`} key={i} onClick={() => onTapChapter(i)}>
                  {item}
                </ItemBox>
              );
            })
          }
      </StyledDrawer>
    </>
  );
};

export default ChapterListBox;
