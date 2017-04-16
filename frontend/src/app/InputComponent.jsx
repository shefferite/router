import React from 'react';
import {render} from 'react-dom';
import 'whatwg-fetch'

class InputComponent extends React.Component {

    constructor(props) {
        super(props);
        this.onTranslate = this.onTranslate.bind(this);
        this.onWordInput = this.onWordInput.bind(this);
        this.state = {
            word: '',
            transaction: ''
        }
    }

    onWordInput(e) {
        this.setState({
            word: e.target.value
        });
    }

    onTranslate() {
        fetch('/translate?word=' + this.state.word).then(response =>
            response.json().then(json => console.log(json))
        );
    }

    render() {
        return (
            <div>
                <label>Word</label>
                <input id="word" onChange={this.onWordInput}/>
                <button onClick={this.onTranslate}>submit</button>
                <div>
                    <span>{this.state.transaction}</span>
                </div>
            </div>
        );
    }
}

export default InputComponent;
