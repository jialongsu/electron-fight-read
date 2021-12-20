import { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { selectBookrackList } from '@/stores/bookrackStore';
import {
  Container,
  AddView,
  BookCover,
  BookItemContainer,
} from './styled';
import BookItem from './BookItem';

const BookList: FC = () => {
  const bookrackList = useSelector(selectBookrackList);

  const onTapItem = () => {

  };

  return (
    <Container>
      {
        bookrackList.map((item) => <BookItem key={item.id} data={item} />)
      }
      <BookItemContainer onClick={onTapItem}>
        <BookCover>
          <AddView />
        </BookCover>
      </BookItemContainer>
    </Container>
  );
};

export default memo(BookList);
