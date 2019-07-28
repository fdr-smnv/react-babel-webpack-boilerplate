import React from 'react'
import ReactDOM from 'react-dom'

import '../css/index.css'

const App = () => (
    <div className="outer">
        <div className="inner">
            <h1>Hello, React!</h1>
        </div>
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));