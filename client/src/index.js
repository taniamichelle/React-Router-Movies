import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <Router>    
        <App />
    </Router>, 
    document.getElementById('root')
);

//in line 3 we're renaming BrowserRouter. You can rename any import in this manner