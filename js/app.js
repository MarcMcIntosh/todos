/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
import { header, footer, todoList } from './views/index.js';
import { getAll } from './store.js';

function drawListAndFooter(element) {
  element.removeChildNodes(1);
  element.removeChildNodes(2);
  if (getAll().length) {
    element.appendChild(todoList());
    element.appendChild(footer());
  }
}

function app() {

  const element = document.createElement('section');
  element.className = 'todoapp';
  element.appendChild(header());
  drawListAndFooter(element);
  // footer
  return element;
};

document.body.appendChild(app());
