import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// <App /> 은 component 이다.
// component 란 HTML 을 반환하는 함수이다.
// Javascript 와 HTML 사이의 조합을 JSX 라고 한다. => react 에만 특화된 개념
ReactDOM.render(<App />, document.getElementById('root'));
