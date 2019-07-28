import React from 'react'
import ReactDOM from 'react-dom'

import '../css/index.css'
import logo from '../img/react-icon.svg'

const App = () => (
    <div className="outer">
        <div className="inner">
            <h1>Hello, React!</h1>
            <img src={logo}></img>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));