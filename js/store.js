/*
craete item
read all items
update an item
delete an item
*/
const { localStorage } = window;
const STORAGE_ID = 'todos';
/*
function setItem(item) {
  return localStorage.setItem(STORAGE_ID, JSON.stringify(item));
}
*/
if(!localStorage.getItem(STORAGE_ID)) {
  localStorage.setItem(STORAGE_ID, JSON.stringify([]));
}

function triggerUpdate() {
  /* Add event listeners for this event */
  return window.dispatchEvent( new Event('storage') );
}

function setItem({
  id = '',
  completed = false,
  created_at = 0,
  title,
} = {}) {
  const updated_at = new Date().toJSON();

  const obj = {
    id: id || created_at || updated_at,
    completed,
    title,
    created_at: created_at || updated_at,
    updated_at,
  };
  const todosAsString = localStorage.getItem(STORAGE_ID);
  const items = JSON.parse(todosAsString).concat(obj);

  localStorage.setItem(STORAGE_ID, JSON.stringify(items));

  return triggerUpdate();
}

function getItem(id) {
  const itemString = localStorage.getItem(id);
  return JSON.parse(itemString);
}

export function createItem(title) {
  if (title) { setItem({ title }) };
}

export function updateItem(item) {
  const oldItem = getItem(item.id);
  return setItem({ ...oldItem, ...item });
}

/* export function getAll() {
  const todos = [];
  for (let i = (localStorage.length - 1); i > 0; i -= 1) {
    todos[i] = JSON.parse(localStorage.key(i));
  }
  return todos.reduce((a, b) => Object.assign({}, a, { [b.id] : b }), {});
} */
export function getAll() {
  const storageString = localStorage.getItem(STORAGE_ID);
  const storageJson = JSON.parse(storageString);
  const todos = [].concat(storageJson || [])
  return todos.sort((a, b) => a < b);
}

export function removedItem({ id }) {
  localStorage.removedItem(id);
  return triggerUpdate();
}
