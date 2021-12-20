import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './router';
import store from './stores';
import GlobalStyle from './styles/globalStyled';
import 'antd/dist/antd.css';

const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <>
      <App />
      <GlobalStyle />
    </>
  </Provider>,
  root,
);
