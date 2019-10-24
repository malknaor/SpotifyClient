import React from 'react';

import MainNavigation from './Naviagtion/MainNavigation';

const App = () => {
    const urlParams = new URLSearchParams(window.location.search);

    return (
        <div className="app-container">
            <MainNavigation />
        </div>
    );
};

export default App;