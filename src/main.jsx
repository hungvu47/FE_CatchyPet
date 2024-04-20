import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./app/store.js"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

const rootElement = document.getElementById('root');
Modal.setAppElement(rootElement);

ReactDOM.createRoot(rootElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ToastContainer />
    <ToastContainer />
  </Provider>
);
