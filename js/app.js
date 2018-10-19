/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
import { header, footer, todoList } from './views/index.js';
import { getAll, removeItem, toggleComplete } from './store.js';

function drawListAndFooter(element) {
  const children = element.childNodes;;
  while (element.childNodes.length > 1) {
    element.removeChild(element.lastChild);
  }

  if (getAll().length) {
    element.appendChild(todoList());
    element.appendChild(footer());
  }

}

function attachUIHandelers() {
  for( let button of document.getElementsByClassName('destroy')) {
    button.addEventListener('click', removeItem);
  };

  for (let toggle of document.getElementsByClassName('toggle')) {
    toggle.addEventListener('change',  toggleComplete);
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
    attachUIHandelers();
  })
  return element;
};

document.body.appendChild(app());
attachUIHandelers();
/* destory buttons */
/* try to get all buttons by id then add removeItem
dow document emit an update functiom ? */

/* this works
for( let node of document.getElementsByClassName('destroy')) {
  node.onclick = removeItem
} */
