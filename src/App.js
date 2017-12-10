import React, { Component } from 'react';
import './App.css';
import Main from './containers/main.js';
import './containers/main.css'
import { Col } from 'react-flexbox-grid';




class App extends Component {
    render() {
        return (
            <Col>
                <Main />
            </Col>
        );
    }
}

export default App;

