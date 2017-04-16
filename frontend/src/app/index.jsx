import React from 'react';
import {render} from 'react-dom';
import InputComponent from './InputComponent.jsx';


class App extends React.Component {
    render () {
        return (
        <div>
            <p> Hello React!</p>
            <InputComponent />
        </div>
    )
    }
}

render(<App/>, document.getElementById('app'));