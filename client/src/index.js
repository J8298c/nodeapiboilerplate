import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SplashPage from './Components/SplashPage/SplashPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SplashPage />, document.getElementById('root'));
registerServiceWorker();
