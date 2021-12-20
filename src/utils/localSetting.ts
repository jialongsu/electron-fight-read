import localStorage from './localStorage';

export enum DarkModel {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

interface LocalSetting {
  fontSize: number;
  backgroundColor?: string;
  themeModel: DarkModel;
}

const KEY = 'readSetting';
export const localSettingData: LocalSetting = localStorage.getItem(KEY)
 || { fontSize: 16, themeModel: DarkModel.SYSTEM };

export const setFontSize = (fontSize: number) => {
  localSettingData.fontSize = fontSize;
  localStorage.setItem(KEY, localSettingData);
};

export const setBackgroundColor = (color: string) => {
  localSettingData.backgroundColor = color;
  localStorage.setItem(KEY, localSettingData);
};

export const setDarkModel = (model: DarkModel) => {
  localSettingData.themeModel = model;
  localStorage.setItem(KEY, localSettingData);
};

export default {
  localSettingData,
  setFontSize,
  setBackgroundColor,
};
