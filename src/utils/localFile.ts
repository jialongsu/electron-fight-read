import nodeFs from 'fs';

// interface Fs {
//   [key: string]: any;
//   promises: {
//     readFile: (path: string) => Promise<string>,
//   };
// }

const fs = nodeFs.promises;
// const fs = (window.require('fs') as Fs).promises;

/**
 * 读取本地文件内容
 * @param path 文件绝对路径
 * @returns string
 */
export const readFile = async (path: string): Promise<string> => {
  const res = await fs.readFile(path);
  const content = res.toString();

  return content;
};

/**
 * 获取章节目录
 * @param content 文章内容
 * @returns string[] | null
 */
export const getChapters = (content: string): string[] | null => {
  const articelDirs = content.match(/(第.+章.*)/gm); // 获取章节目录
  return articelDirs;
};

/**
 * 获取章节内容
 * @param content 文章内容
 * @param chapters 文章目录
 * @param selectChapterIndex 选中的章节目录索引
 * @returns string | null
 */
export const getChapterContent = (
  content: string,
  chapters: string[],
  selectChapterIndex: number,
): string | null => {
  const maxLen = chapters.length - 1;
  const selectChapter = chapters[selectChapterIndex];
  let naxtChapter = chapters[Math.min(selectChapterIndex + 1, maxLen)];
  naxtChapter = naxtChapter === selectChapter ? '' : naxtChapter; // 解决最后一章匹配不到内容的问题
  const reg = new RegExp(`(?:${selectChapter})(.*)(?=${naxtChapter})`, 'gs');
  const articelContent = content.match(reg);

  if (articelContent) {
    return articelContent[0];
  }
  return articelContent;
};

export default {
  readFile,
  getChapters,
  getChapterContent,
};
