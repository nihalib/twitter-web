import React from 'react';

import '../App.css';

import Header from "./Header";
import Body from "./Body";
import Sidebar from "./Sidebar";

function App() {
    return (
        <>
            <Header/>
            <div id="wrapper">
                <Body/>
                <Sidebar/>
            </div>
        </>
    );
}

export default App;
