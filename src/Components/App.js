import React, { useState } from 'react';
import ResourceList from './ResourceList';

const App = () => {
    const [resource, setResource] = useState('posts');

    return (
        <div>
            <div>
                <button onClick={() => setResource('Posts')}>Post</button>
                <button onClick={() => setResource('Todos')}>Todos</button>
            </div>
            <hr/>
            <ResourceList resource={resource} />
        </div>
    )
};

export default App;