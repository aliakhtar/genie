import React, { useEffect, useState } from 'react';
import { invoke } from '@forge/bridge';
import Dictaphone from "./Dictaphone";

function App() {
    const [data, setData] = useState(null);

    /*useEffect(() => {
        // @ts-ignore
        invoke('getText', { example: 'my-invoke-variable' }).then(setData);
    }, []);*/

    return (
        <div>
            <Dictaphone />
        </div>
    );
}

export default App;
