export interface BookReadState {
  id: number;
  bookContent: string; // 读取文件的文本信息
  chapters: string[]; // 小说目录
  chapterContentList: string[]; // 小说章节内容
  currentChapterIndex: number; // 当前阅读章节的索引
  isFinish: boolean; // 是否已阅读完成
  readPosition: number; // 阅读位置
  fontSize: number; // 字体大小
  backgroundColor?: string; // 阅读背景
}
