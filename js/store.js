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

function setItem({
  id = '',
  completed = false,
  created_at = 0,
  label,
} = {}) {
  const updated_at = new Date().toJSON();

  const obj = {
    id: id || created_at || updated_at,
    completed,
    label,
    created_at: created_at || updated_at,
    updated_at,
  };
  const items = localStorage.getItem(STORAGE_ID);
  items.push(obj);

  return localStorage.setItem(STORAGE_ID, JSON.stringify(items));
}

function getItem(id) {
  const itemString = localStorage.getItem(id);
  return JSON.parse(itemString);
}

export function createItem(title) {
  if(title) { setItem({ title }) };
  return getAll();
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
  const items = localStorage.getItem(STORAGE_ID);
  return JSON.parse(items).sort((a, b) => a < b);
}

export function removedItem({ id }) {
  localStorage.removedItem(id);
  return getAll();
}
