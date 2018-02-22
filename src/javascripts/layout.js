/** @jsx h */
import { h, render } from 'preact';
import App from './components/app';
import AnotherComponent from './components/another-component';
import NotFound from './components/404';
import Router from 'preact-router';
import '../stylesheets/index.scss';

let mountNode = document.querySelector('.main');

const MainRender = () => (
  <Router>
    <App path="/" />
    <AnotherComponent path="/component" />
    <NotFound path="" default />
  </Router>
);

render(<MainRender />, mountNode, mountNode.lastChild);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
