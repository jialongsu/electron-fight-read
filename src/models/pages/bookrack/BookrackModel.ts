export interface BookrackState {
  bookrackList: BookrackListItem[];
  isEditing: boolean; // 是否正在编辑书架
  deleteList: number[]; // 需要删除的书籍（id）
}

export interface BookrackListItem {
  id: number;
  bookName: string; // 书本名称
  size: number; // 文件大小
  filePath: string; // 文件路径
  fileType: string; // 文件类型
  updateTime: number; // 更新时间
  totalPage: number; // 总章节
  readPage: number; // 正在阅读的章节
  readPosition: number; // 正在阅读章节的位置
}

export interface LocalBookData {
  [key: string]: BookrackListItem;
}
