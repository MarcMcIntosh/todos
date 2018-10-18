/* Footer */
// should only display if there are todos
/* <footer class="footer">
      <span class="todo-count"><strong>0</strong> item left</span>
  <ul class="filters">
    <li><a class="selected" href="#/">All</a></li>
    <li><a href="#/active">Active</a></li>
    <li><a href="#/completed">Completed</a></li>
  </ul>
  <!-- Hidden if no completed items are left ↓ -->
  <button class="clear-completed">Clear completed</button>
</footer>*/

import { getAll } from '../store.js';
/* use naviation event on filters */
function totalTodos(elem) {
  const numberOfToDos = getAll().length;
  elem.innerHTML = `
    <span class="todo-count">
      <strong>${numberOfToDos}</strong>
      ${numberOfToDos === 1 ? 'item' : 'items'} left
    </span>
    <ul class="filters">
      <li><a class="selected" href="#/">All</a></li>
      <li><a href="#/active">Active</a></li>
      <li><a href="#/completed">Completed</a></li>
    </ul>
  `;
  if (numberOfToDos !== 0) {
    elem.innerHTML += '<button class="clear-completed">Clear completed</button>';
  }
}

export default function footer() {
  const root = document.createElement('footer');
  root.className = "footer";
  totalTodos(root);
  // window.addEventListener('strorage', function() { totalTodos(root); });
  return root;
}
