import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { init, reset, selectBackgroundColor } from '@/stores/bookReadStore';
import { selectIsUseDarkModel } from '@/stores/configStore';
import ReadContent from './components/ReadContent';
import LeftToolBar from './components/LeftToolBar';
import RightToolBar from './components/RightToolBar';
import { Container } from './styled';

const BookRead: FC = () => {
  const { id, page } = useParams();
  const dispatch = useDispatch();
  const bgColor = useSelector(selectBackgroundColor);
  const isUseDarkModel = useSelector(selectIsUseDarkModel);

  useEffect(() => {
    dispatch(init({ id: Number(id), pageNum: Number(page) }));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, id, page]);

  return (
    <Container bgColor={bgColor} isUseDarkModel={isUseDarkModel}>
      <LeftToolBar />
      <ReadContent />
      <RightToolBar />
    </Container>
  );
};

export default BookRead;
