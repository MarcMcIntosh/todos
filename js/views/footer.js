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

function totalTodos(numberOfToDos) {
  const root = document.createElement('span');
  root.className = "todo-count";
  const strong = document.createElement('strong');
  const strongText = document.createTextNode(numberOfToDos);

  strong.appendChild(strongText);
  root.appendChild(strong);

  const itemText = numberOfToDos === 1 ? 'item' : 'items';
  const text = document.createTextNode(itemText + ' left');

  root.appendChild(text);

  return root;

}

export default function footer() {
  const root = document.createElement('footer');
  root.className = "footer";
  root.appendChild(totalTodos());
  return root;
}
