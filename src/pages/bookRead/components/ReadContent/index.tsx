import {
  FC,
  memo,
  useRef,
  useEffect,
  MouseEvent,
} from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectBookReadStore, updateBookrackList } from '@/stores/bookReadStore';
import {
  Content,
  Title,
  Paragraph,
  BtnContainer,
  StyledButton,
} from './styled';

const height = window.innerHeight;

const ReadContent: FC = () => {
  const {
    chapterContentList,
    chapters,
    currentChapterIndex,
    isFinish,
    readPosition,
    fontSize,
  } = useSelector(selectBookReadStore);
  const navigate = useNavigate();
  const { id = 0, page = 1 } = useParams();
  const scrollTop = useRef(0); // 点击内容区域翻页

  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;
    const onScrollEnd = (y: number) => {
      updateBookrackList(Number(id), currentChapterIndex, y);
    };
    const onScroll = () => {
      scrollTop.current = document.documentElement.scrollTop || document.body.scrollTop;

      // 模拟scrollEnd事件
      scrollTimer && clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        onScrollEnd(scrollTop.current);
      }, 250);
    };

    window.scrollTo(0, readPosition); // 滚动至上次阅读的位置
    window.addEventListener('scroll', onScroll);

    return () => {
      scrollTimer && clearTimeout(scrollTimer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [readPosition, id, currentChapterIndex]);

  const onChangePage = (type: 0 | 1, e: MouseEvent) => {
    e.stopPropagation();
    const maxLen = chapters.length;
    let pageNum = Number(page);
    pageNum = type === 0 ? Math.max(1, pageNum - 1) : Math.min(maxLen, pageNum + 1);
    updateBookrackList(Number(id), currentChapterIndex, 0);
    navigate(`/bookRead/${id || ''}/${pageNum}`, { replace: true });
  };

  const onTurnPage = () => {
    const y = scrollTop.current + height;
    updateBookrackList(Number(id), currentChapterIndex, y);
    window.scrollTo(0, y);
  };

  const renderBtn = (text: string, type: 0 | 1) => (
    <StyledButton
      type='primary'
      shape='round'
      onClick={(e: MouseEvent) => onChangePage(type, e)}
    >
      {text}

    </StyledButton>
  );

  return (
    <Content
      style={{
        minHeight: `${height}px`,
        fontSize: `${fontSize}px`,
        lineHeight: `${fontSize * 2}px`,
      }}
      onClick={onTurnPage}
    >
      {chapterContentList.map((item, i) => {
        if (i === 0) {
          return (<Title key={i}>{item}</Title>);
        }
        return (<Paragraph key={i}>{item}</Paragraph>);
      })}
      <BtnContainer>
        {!isFinish && renderBtn('下一章', 1)}
        {currentChapterIndex > 0 && renderBtn('上一章', 0)}
      </BtnContainer>
    </Content>
  );
};

export default memo(ReadContent);
