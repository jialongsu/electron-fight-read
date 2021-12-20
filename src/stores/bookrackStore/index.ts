import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';
import { BookrackState, BookrackListItem } from '@/models/pages/bookrack/BookrackModel';
import localStorage from '@/utils/localStorage';
import type { RootState } from '../index';

const initialState: BookrackState = {
  bookrackList: [],
  deleteList: [],
  isEditing: false,
};

export const bookrackSlice = createSlice({
  name: 'bookrack',
  initialState,
  reducers: {
    getBookrackList: (state) => {
      const bookrackList = localStorage.getItem<BookrackListItem[]>('bookrackList');
      if (bookrackList) {
        state.bookrackList = bookrackList;
      }
    },
    addBook: (state, action: PayloadAction<BookrackListItem | BookrackListItem[]>) => {
      const { payload } = action;

      if (payload instanceof Array) {
        state.bookrackList = state.bookrackList.concat(payload);
      } else {
        state.bookrackList.push(payload);
      }

      localStorage.setItem('bookrackList', state.bookrackList);
    },
    changeEditState: (state) => {
      state.isEditing = !state.isEditing;
    },
    checkDeleteItem: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const { deleteList } = state;
      const existIndex = deleteList.indexOf(id);

      if (existIndex >= 0) {
        state.deleteList.splice(existIndex, 1);
      } else {
        state.deleteList.push(action.payload);
      }
    },
    checkAll: (state) => {
      const { deleteList, bookrackList } = state;
      if (deleteList.length === bookrackList.length) {
        state.deleteList = [];
      } else {
        state.deleteList = state.bookrackList.map((item) => item.id);
      }
    },
    deleteBooks: (state) => {
      const { deleteList, bookrackList } = state;
      const newList = bookrackList.filter((item) => !deleteList.includes(item.id));
      state.bookrackList = newList;
      localStorage.setItem('bookrackList', newList);
      state.isEditing = false;
      message.success('删除成功');
    },
  },
});

export const {
  getBookrackList,
  addBook,
  changeEditState,
  checkDeleteItem,
  deleteBooks,
  checkAll,
} = bookrackSlice.actions;

export const selectBookrackList = (state: RootState) => state.bookrackStore.bookrackList;
export const selectEditState = (state: RootState) => state.bookrackStore.isEditing;
export const selectDeleteList = (state: RootState) => state.bookrackStore.deleteList;

export default bookrackSlice.reducer;
