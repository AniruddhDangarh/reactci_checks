import logo from './logo.svg';
import './App.css';

import React from 'react';

const App = () => {
    const unusedVariable = 'This variable is unused'; // Intentional issue
    return (
        <div>
            <h1>React Static Code Analysis</h1>
            <p>Test the ESLint setup with Jenkins!</p>
        </div>
    );
};

export default App;
