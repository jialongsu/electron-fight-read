import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ConfigModel } from '@/models/configs/ConfigModel';
import theme, { ITheme } from '@/configs/themeStyled';
import { localSettingData, setDarkModel, DarkModel } from '@/utils/localSetting';
import type { RootState } from '../index';

interface IChangeTheme {
  model: DarkModel;
}

interface IGetTheme {
  themeValue: ITheme;
  isUseDarkModel: boolean;
}

const getTheme = (model: DarkModel): IGetTheme => {
  let media;
  let themeValue;
  let isUseDarkModel = false;

  switch (model) {
    case DarkModel.SYSTEM:
      media = window.matchMedia('(prefers-color-scheme: dark)');
      isUseDarkModel = media.matches; // 判断当前系统是否开启暗黑模式
      themeValue = isUseDarkModel ? theme.darkTheme : theme.blueTheme;
      break;
    case DarkModel.DARK:
      themeValue = theme.darkTheme;
      isUseDarkModel = true;
      break;

    default:
      themeValue = theme.blueTheme;
      break;
  }

  return {
    themeValue,
    isUseDarkModel,
  };
};

const res = getTheme(localSettingData.themeModel);
const initialState: ConfigModel = {
  theme: res.themeValue,
  themeModel: localSettingData.themeModel,
  isUseDarkModel: res.isUseDarkModel,
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<IChangeTheme>) => {
      const { model } = action.payload;
      const { themeValue, isUseDarkModel } = getTheme(model);

      state.theme = themeValue;
      state.themeModel = model;
      state.isUseDarkModel = isUseDarkModel;
      setDarkModel(model);
    },
  },
});

export const { changeTheme } = configSlice.actions;

export const selectTheme = (state: RootState) => state.configStore.theme;
export const selectThemeModel = (state: RootState) => state.configStore.themeModel;
export const selectIsUseDarkModel = (state: RootState) => state.configStore.isUseDarkModel;

export default configSlice.reducer;
