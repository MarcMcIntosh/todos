/*
craete item
read all items
update an item
delete an item
*/

const { localStorage } = window;

function setItem({
  id = ''
  completed = false,
  created_at = 0,
  label,
} = {}) {
  const update_at = new Date();

  const obj = {
    id: id || `todos-marc-${created_at || updated_at}`,
    completed,
    label,
    created_at: created_at || update_at,
    update_at,
  };
  return localStorage.setItem(id, JSON.stringify(obj));
}

function getItem(id) {
  const itemString = localStorage.getItem(id);
  return JSON.parse(itemString);
}

function createItem(label) {
  setItem({ label });
  return getAlL();
}

function updateItem(item) {
  const oldItem = getItem(item.id);
  return setItem({ ...oldItem, ...item });
}

function getAll() {
  const todos = [];
  for (let i = (localStorage.length - 1); i > 0; i =-1) {
    todos[i] = localStorage.key(i);
  }
  return todos.reduce((a, b) => Object.assign({}, a, { [b.id] : b }), {});
}

function removedItem({ id }) {
  localStorage.removedItem(id);
  return getAll();
}

export { getAll, updateItem, createItem, removedItem };
