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

function sortByMostRecent(a, b) {
  return a.created_at > b.created_at;
}

function replaceAll(newTodos) {
  localStorage.setItem(STORAGE_ID, JSON.stringify(newTodos));
  return triggerUpdate();
}

export function getAll() {
  const storageString = localStorage.getItem(STORAGE_ID);
  const storageJson = JSON.parse(storageString);
  const todos = [].concat(storageJson || [])
  return todos.sort(sortByMostRecent);
}

function removeById(id) {
  return getAll().filter(item => item.id !== id );
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
  const oldTodos = getAll();
  const todos = removeById(obj.id);
  const items = todos.concat(obj);

  return replaceAll(items);

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

export function removeItem({ target: { id } }) {
  const todos = removeById(id);
  return replaceAll(todos);
}
