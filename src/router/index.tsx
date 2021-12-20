import { FC, lazy, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ipcRenderer } from 'electron';
import { ThemeProvider } from '@/configs/styledComponents';
import { changeTheme, selectTheme } from '@/stores/configStore';
import { DarkModel } from '@/utils/localSetting';
import Loadable from './loadable';

const Router: FC = () => {
  const themeData = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    // 监听系统深色模式改变事件
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const callback = () => {
      const handler = async () => {
        const currentModel = await ipcRenderer.invoke('dark-mode:themeSource') as DarkModel;
        dispatch(changeTheme({ model: currentModel }));
      };
      handler();
    };

    media.addEventListener('change', callback);

    return () => {
      media.removeEventListener('change', callback);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={themeData}>
      <BrowserRouter basename='/'>
        <Routes>
          <Route path='/' element={<Loadable loader={() => lazy(() => import('@/pages/main'))} />}>
            <Route index element={<Loadable loader={() => lazy(() => import('@/pages/home'))} />} />
            <Route path='/bookrack' element={<Loadable loader={() => lazy(() => import('@/pages/bookrack'))} />} />
          </Route>
          <Route
            path='/bookRead/:id/:page'
            element={<Loadable loader={() => lazy(() => import('@/pages/bookRead'))} />}
          />
          <Route path='/settings' element={<Loadable loader={() => lazy(() => import('@/pages/settings'))} />} />
          <Route path='*' element={<Loadable loader={() => lazy(() => import('@/pages/main'))} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
