/* ListItem */
/* <li class=(completed ? "completed" : (editting) ? 'editting' : "")>
    <div class="view">
    <input class="toggle" type="checkbox" checked>
                                  <label>Taste JavaScript</label>
                                  <button class="destroy"></button>
  </div>
   <input class="edit" value="Create a TodoMVC template">
</li> */
import { removeItem } from '../store.js';
window.removeItem = removeItem;

export default function listItem({
  completed,
  id,
  // editting,
  title,
  // onEdit,
  // onChange,
}) {
  const cn = completed ? "completed" : "";
  const checkBox = completed ? (
    '<input class="toggle" type="checkbox" checked />'
  ) : (
    '<input class="toggle" type="checkbox" />'
  );


  return `
    <li class=${cn}>
      <div class="view">
        <label>${title}</label>
        <button id=${id} class="destroy" onclick="removeItem(${id})"/>
      </div>
      <input class="edit" value="Create a TodoMVC template" />
    </li>`;

}
