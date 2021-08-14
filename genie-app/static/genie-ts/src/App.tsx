import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import { router } from '@forge/bridge';
import CSS from 'csstype';



const styles: CSS.Properties = {
    width: "100%",
    height: "100%"
};

function App() {
    const url = "wss://echo.websocket.org";
    const [data, setData] = useState(null);

    function testWebSocket()
    {
        const websocket = new WebSocket(url);
        websocket.onopen = e=> {
            console.log("ws opened", e);
            console.log("sending ping");
            websocket.send("ping");
        }
        websocket.onclose = e=> console.log("ws closed", e);
        websocket.onmessage = e=> console.log("ws msg", e);
        websocket.onerror = e=> console.log("ws error", e);

        router.open('http://genie-frontend.storage.googleapis.com/index.html');

    }


    /*useEffect(() => {
        // @ts-ignore
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);*/

    return (
        <div style={styles} >
            <button onClick={testWebSocket}>Test</button>
        </div>
    );
}

export default App;
