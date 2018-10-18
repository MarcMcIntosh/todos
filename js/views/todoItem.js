/* ListItem */
/* <li class=(completed ? "completed" : (editting) ? 'editting' : "")>
    <div class="view">
    <input class="toggle" type="checkbox" checked>
                                  <label>Taste JavaScript</label>
                                  <button class="destroy"></button>
  </div>
   <input class="edit" value="Create a TodoMVC template">
</li> */

export default function listItem({
  completed,
  // editting,
  title,
  // onEdit,
  // onChange,
}) {
  const cn = completed ? "completed" : editting ? 'editting': "";
  return `
    <li class=${cn}>
      <div class="view">
        <input class="toggle" type="checkbox" checked />
        <label>${title}</label>
        <button class="destroy" />
      </div>
      <input class="edit" value="Create a TodoMVC template" />
    </li>`;

}
