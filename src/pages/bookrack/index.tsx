import { FC, DragEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';
import { selectBookrackList, addBook, getBookrackList } from '@/stores/bookrackStore';
import { BookrackListItem } from '@/models/pages/bookrack/BookrackModel';
import { readFile, getChapters } from '@/utils/localFile';
import { Container } from './styled';
import BookList from './components/BookList';
import ToolBar from './components/ToolBar';

const supportFileTypeReg = /text\/plain/g;

const Bookrack: FC = () => {
  const dispatch = useDispatch();
  const bookrackList = useSelector(selectBookrackList);

  useEffect(() => {
    dispatch(getBookrackList());
  }, [dispatch]);

  const onDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = async (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer; // 获取文件
    const bookDataList: BookrackListItem[] = [];
    const readFilePromiseList: Promise<string>[] = [];
    const len = files.length - 1;
    const existBookNameList = bookrackList.map((item) => item.bookName);
    let index = 0;

    // 判断文件类型是否不支持
    while (index <= len) {
      const file = files[index] as File & { path: string };
      const isSupport = file.type.search(supportFileTypeReg) !== -1;
      let msg;

      if (!isSupport) {
        msg = `文件：${file.name}  格式（${file.type}）不正确`;
      } if (existBookNameList.includes(file.name)) {
        msg = `文件：${file.name}  已存在`;
      }

      if (msg) {
        message.error(msg);
        return;
      }

      const bookData: BookrackListItem = {
        id: Date.now(),
        bookName: file.name,
        size: file.size,
        filePath: file.path,
        fileType: file.type,
        updateTime: file.lastModified,
        totalPage: 1,
        readPage: 1,
        readPosition: 0,
      };
      readFilePromiseList.push(readFile(file.path));
      bookDataList.push(bookData);
      index += 1;
    }
    const contentList = await Promise.all(readFilePromiseList);
    bookDataList.forEach((item, i) => {
      const content = contentList[i];
      const totalPage = getChapters(content)?.length || 0;
      item.totalPage = totalPage;
    });
    dispatch(addBook(bookDataList));
    message.success('添加书籍成功');
  };

  return (
    <Container
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <ToolBar />
      <BookList />
    </Container>
  );
};

export default Bookrack;
