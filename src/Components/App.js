import React, { useState } from 'react';

const App = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResource('Posts')}>Post</button>
                <button onClick={() => setResource('Todos')}>Todos</button>
            </div>
            <hr/>
            {resource}
        </div>
    )
};

export default App;