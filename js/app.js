/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
import { header, footer, todoList } from './views/index.js';
import { getAll, removeItem } from './store.js';

function drawListAndFooter(element) {
  const children = element.childNodes;;
  while (element.childNodes.length > 1) {
    element.removeChild(element.lastChild);
  }
/*
  if (children.length === 3) {
    element.removeChild(children[1]);
    element.removeChild(children[2]);
  }
*/
  if (getAll().length) {
    element.appendChild(todoList());
    element.appendChild(footer());
    /* destory buttons */

    for(let node of document.getElementsByClassName('destroy')) {
      node.onclick = console.log;
    }
  }

}

function app() {

  const element = document.createElement('section');
  element.className = 'todoapp';
  element.appendChild(header());
  drawListAndFooter(element);
  // footer
  window.addEventListener('storage', function() {
    drawListAndFooter(element);
  })
  return element;
};

document.body.appendChild(app());
