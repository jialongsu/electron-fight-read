import { FC, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectEditState, checkDeleteItem, selectDeleteList } from '@/stores/bookrackStore';
import { BookrackListItem } from '@/models/pages/bookrack/BookrackModel';
import {
  BookCover,
  BookItemContainer,
  BookName,
  BookInfo,
  CheckCircleFilled,
} from './styled';

interface P {
  data: BookrackListItem;
}

const BookItem: FC<P> = ({ data }) => {
  const img = 'https://wfqqreader-1252317822.image.myqcloud.com/cover/881/35573881/b_35573881.jpg';
  const isEditing = useSelector(selectEditState);
  const deleteList = useSelector(selectDeleteList);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isChecked = deleteList.includes(data.id);

  const onTapItem = () => {
    if (isEditing) {
      dispatch(checkDeleteItem(data.id));
    } else {
      navigate(`/bookRead/${data.id}/${data.readPage}`);
    }
  };

  return (
    <BookItemContainer onClick={onTapItem}>
      <BookCover>
        <img src={img} alt='' />
        {isEditing && <CheckCircleFilled $isChecked={isChecked} />}
      </BookCover>
      <BookName>{data.bookName}</BookName>
      <BookInfo>
        {data.readPage}
        章/
        {data.totalPage}
        章
      </BookInfo>
    </BookItemContainer>
  );
};

export default memo(BookItem);
