import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import CSS from 'csstype';



const styles: CSS.Properties = {
    width: "100%",
    height: "100%"
};

function App() {
    const [data, setData] = useState(null);

    /*useEffect(() => {
        // @ts-ignore
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);*/

    return (
        <div style={styles} >
            <iframe style={styles} src="https://genie-frontend.storage.googleapis.com/index.html?reload=1112" />
        </div>
    );
}

export default App;
