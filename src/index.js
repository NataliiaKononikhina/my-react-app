import ReactDOM from 'react-dom';
import React from 'react';

import { App } from './App';
import AuthContext from './AuthContext';

import './index.css';

const user = {
    email: 'bb@bbb.com',
    firstName: 'Nata',
    lastName: 'Frog',
    avatarUrl: 'https://relaunch.sonova.com/cdn/ff/-6ughzIH0jAAtvVW45hWwlrxQYUbhYVEcMBxb4dHt7I/1595638191/public/styles/header_image_tablet/public/2019-07/shutterstock_253580635_square.jpg?itok=TwBeTHTY',
};

ReactDOM.render(
    <AuthContext.Provider value={user}>
        <App />
    </AuthContext.Provider>,
    document.getElementById('root')
);
