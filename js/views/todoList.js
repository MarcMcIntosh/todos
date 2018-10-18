/* Main */
// should only display is there are todos
// <section class="main">
//	<input id="toggle-all" class="toggle-all" type="checkbox">
                  //        <label for="toggle-all">Mark all as complete</label>
//	<ul class="todo-list">[ITEMS]</ul>
// </section>
import { getAll } from '../store.js';
import todoItem from './todoItem.js';

function appendList(elem) {
  const todos = getAll();
  const listItems = todos.map(todoItem);
  elem.innerHTML = `<input id="toddle-all" class="toggle-call" type="checkbox" />
  <label for="toggle-all">Mark all as complete</label>
  <ul class="todo-list">${listItems.join('\n')}</ul>`;
}

export default function todoList() {
  const root = document.createElement('section');
  root.className = 'main';
  appendList(root);
  /* automatic redraw on list changes */
  window.addEventListener('storage', function(event) { appendList(root); });
  return root;
}
