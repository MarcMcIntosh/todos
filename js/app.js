/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
import { header, footer, todoList } from './views/index.js';

function app() {

  const element = document.createElement('section');
  element.className = 'todoapp';
  element.appendChild(header());

  // footer
  if (window.localStorage.length) {
    element.innerHTML = todoList();
    element.appendChild(footer());

  }
  return element;
};

document.body.appendChild(app());
