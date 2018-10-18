/* Main */
// should only display is there are todos
// <section class="main">
//	<input id="toggle-all" class="toggle-all" type="checkbox">
                  //        <label for="toggle-all">Mark all as complete</label>
//	<ul class="todo-list">[ITEMS]</ul>
// </section>
import { getAll } from '../store.js';
import todoItem from './todoItem.js';

export default function todoList() {
  const todos = getAll();
  const listItems = todos.map(todoItem);
  return `
    <section class="main">
      <input id="toddle-all" class="toggle-call" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">${listItems.join('\n')}</ul>
    </section>
  `;
}
