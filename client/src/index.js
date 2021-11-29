import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'materialize-css/dist/css/materialize.min.css';
import {UserProvider} from "./context/UserContext";
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
   <UserProvider>
    <App />
    </UserProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
