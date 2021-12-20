import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { BookrackListItem } from '@/models/pages/bookrack/BookrackModel';
import { BookReadState } from '@/models/pages/bookRead/BookReadModel';
import localStorage from '@/utils/localStorage';
import { getChapterContent, getChapters, readFile } from '@/utils/localFile';
import { localSettingData, setFontSize, setBackgroundColor } from '@/utils/localSetting';
import type { RootState } from '../index';

interface ChapterData {
  chapters: string[];
  chapterContentList: string[];
  isFinish: boolean;
}

const initialState: BookReadState = {
  id: -1,
  bookContent: '',
  chapters: [], // 小说目录
  chapterContentList: [], // 小说章节内容
  currentChapterIndex: 0,
  isFinish: false,
  readPosition: 0,
  fontSize: 16,
};

const getChapterData = (bookContent: string, currentChapterIndex: number): ChapterData | undefined => {
  const chapters = getChapters(bookContent);

  if (chapters) {
    const chapterContent = getChapterContent(bookContent, chapters, currentChapterIndex);
    const chapterContentList = chapterContent?.split('\n').map((item) => item.trim()) || [];
    return {
      chapters,
      chapterContentList,
      isFinish: currentChapterIndex >= chapters.length - 1,
    };
  }
  return undefined;
};

export const updateBookrackList = (id: number, currentChapterIndex: number, readPosition?: number) => {
  const bookrackList = localStorage.getItem<BookrackListItem[]>('bookrackList');
  if (bookrackList) {
    const newList = bookrackList.map((item) => {
      if (item.id === id) {
        item.readPage = currentChapterIndex + 1;
        item.readPosition = readPosition !== undefined && readPosition >= 0 ? readPosition : item.readPosition;
      }
      return item;
    });
    localStorage.setItem('bookrackList', newList);
  }
};

export const init = createAsyncThunk('bookRead/init', async (params: { id: number; pageNum: number; }) => {
  const { id, pageNum } = params;
  const bookrackList = localStorage.getItem<BookrackListItem[]>('bookrackList');
  const data: BookReadState = { ...initialState, id };
  const pageIndex = pageNum - 1;

  if (bookrackList) {
    const bookData = bookrackList.find((item) => item.id === id);
    if (bookData) {
      const bookContent = await readFile(bookData.filePath);
      const chapterData = getChapterData(bookContent, pageIndex);
      if (chapterData) {
        data.chapters = chapterData.chapters;
        data.chapterContentList = chapterData.chapterContentList;
        data.isFinish = chapterData.isFinish;
        data.readPosition = bookData.readPosition;
      }
      data.bookContent = bookContent;
      data.currentChapterIndex = pageIndex;
      return data;
    }
  }

  return data;
});

export const bookReadSlice = createSlice({
  name: 'bookRead',
  initialState,
  reducers: {
    changePageNum: (state, action: PayloadAction<0 | 1>) => {
      const index = state.currentChapterIndex;
      if (action.payload === 0) {
        state.currentChapterIndex = Math.max(0, index - 1);
      } else {
        state.currentChapterIndex = Math.min(state.chapters.length - 1, index + 1);
      }
      const chapterData = getChapterData(state.bookContent, state.currentChapterIndex);
      if (chapterData) {
        state.chapters = chapterData.chapters;
        state.chapterContentList = chapterData.chapterContentList;
        state.isFinish = chapterData.isFinish;
      }
    },
    changeFontSize: (state, action: PayloadAction<number>) => {
      const fontSize = action.payload;
      state.fontSize = fontSize;
      setFontSize(fontSize);
    },
    changeBackgroundColor: (state, action: PayloadAction<string>) => {
      const bgColor = action.payload;
      state.backgroundColor = bgColor;
      setBackgroundColor(bgColor);
    },
    reset: (state) => {
      state.id = -1;
      state.bookContent = '';
      state.chapters = [];
      state.chapterContentList = [];
      state.currentChapterIndex = 0;
      state.isFinish = false;
      state.readPosition = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(init.fulfilled, (state, action) => {
        const {
          bookContent,
          chapterContentList,
          chapters,
          id,
          currentChapterIndex,
          readPosition,
          isFinish,
        } = action.payload;
        state.bookContent = bookContent;
        state.chapterContentList = chapterContentList;
        state.chapters = chapters;
        state.id = id;
        state.currentChapterIndex = currentChapterIndex;
        state.readPosition = readPosition;
        state.isFinish = isFinish;
        state.fontSize = localSettingData.fontSize;
        state.backgroundColor = localSettingData.backgroundColor;
        updateBookrackList(id, currentChapterIndex);
      });
  },
});

export const {
  changePageNum,
  reset,
  changeFontSize,
  changeBackgroundColor,
} = bookReadSlice.actions;

export const selectBookReadStore = (state: RootState) => state.bookReadStore;
export const selectChapters = (state: RootState) => state.bookReadStore.chapters;
export const selectFontSize = (state: RootState) => state.bookReadStore.fontSize;
export const selectBackgroundColor = (state: RootState) => state.bookReadStore.backgroundColor;

export default bookReadSlice.reducer;
