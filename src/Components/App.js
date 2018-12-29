import React from 'react';

class App extends React.Component {
    state = {resource: 'posts'};

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.setState({resource: 'Posts'})}>Post</button>
                    <button onClick={() => this.setState({resource: 'Todos'})}>Todos</button>
                </div>
                <hr/>
                {this.state.resource}
            </div>
        )
    }
}

export default App;