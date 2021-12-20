import {
  FC, memo,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ipcRenderer } from 'electron';
import { Select } from 'antd';
import { changeTheme, selectThemeModel } from '@/stores/configStore';
import { DarkModel } from '@/utils/localSetting';
import {
  StyledContent,
} from './styled';

const { Option } = Select;

const SelectTheme: FC = () => {
  const list = [
    { label: '跟随系统', value: DarkModel.SYSTEM },
    { label: '正常模式', value: DarkModel.LIGHT },
    { label: '深色模式', value: DarkModel.DARK },
  ];
  const dispatch = useDispatch();
  const themeModel = useSelector(selectThemeModel);

  const onChangeTheme = async (value: DarkModel) => {
    // 设置系统暗黑模式
    switch (value) {
      case DarkModel.SYSTEM:
        await ipcRenderer.invoke('dark-mode:system') as string;
        break;
      case DarkModel.DARK:
        await ipcRenderer.invoke('dark-mode:dark') as string;
        break;

      default:
        await ipcRenderer.invoke('dark-mode:light') as string;
        break;
    }
    dispatch(changeTheme({ model: value }));
  };

  return (
    <StyledContent>
      <span id='label'>外观：</span>
      <Select value={themeModel} style={{ width: 120 }} onChange={onChangeTheme}>
        {list.map((item) => (
          <Option key={item.value} value={item.value}>{item.label}</Option>
        ))}
      </Select>
    </StyledContent>
  );
};

export default memo(SelectTheme);
