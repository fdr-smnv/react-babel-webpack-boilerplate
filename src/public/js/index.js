const React = require('react');
const ReactDom = require('react-dom');

import '../css/index.css'

const App = () => <h1>Hello, React!</h1>;

ReactDom.render(<App />, document.getElementById('root'));