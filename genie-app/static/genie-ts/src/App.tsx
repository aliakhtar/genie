import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { router } from '@forge/bridge';
import CSS from 'csstype';
import Header from "./nav/Header";




function App() {
    const url = "wss://echo.websocket.org";



    /*useEffect(() => {
        // @ts-ignore
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);*/


    return (
        <div className="font-nunito">
            <Header />
        </div>
    );
}

export default App;
