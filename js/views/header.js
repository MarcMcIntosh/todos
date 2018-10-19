/* Header */
/* <header class="header">
    <h1>todos</h1>
  (append toggle all button)
  <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header> */
import { createItem } from '../store.js';

export default function header() {
  const element = document.createElement('header');
  element.className = 'header';

  const h1 = document.createElement('h1');
  const text = document.createTextNode('todos');
  h1.appendChild(text);

  const input = document.createElement('input');
  input.className = "new-todo";
  input.setAttribute('placeholder', "What needs to be done?");
  input.setAttribute('autofocus', true);
  input.onblur = () => { input.value = '' };

  input.onkeyup = (event) => {
    const str = event.target.value.trim();
    // event.preventDefault();
    if (str && event.keyCode === 13) {
      createItem(str);
      input.value = '';
    }
  };

  element.appendChild(h1);
  element.appendChild(input);

  return element;
}
