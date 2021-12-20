import { ITheme } from '@/configs/themeStyled';
import { DarkModel } from '@/utils/localSetting';

export interface ConfigModel {
  theme: ITheme;
  themeModel: DarkModel; // 当前主题类型
  isUseDarkModel: boolean; // 是否开启了暗黑模式
}
