// See here for advice on writing componenets
// https://github.com/aspittel/rainbow-word-webcomponent/blob/master/script.js
// https://www.w3schools.com/jsref/dom_obj_all.asp
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/

/* Views */

/* Header */
/* <header class="header">
    <h1>todos</h1>
  (append toggle all button)
  <input class="new-todo" placeholder="What needs to be done?" autofocus>
</header> */

/* Main */
// should only display is there are todos
// <section class="main">
//	<input id="toggle-all" class="toggle-all" type="checkbox">
                  //        <label for="toggle-all">Mark all as complete</label>
//	<ul class="todo-list">[ITEMS]</ul>
// </section>

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


/* ListItem */
/* <li class=(completed ? "completed" : (editting) ? 'editting' : "")>
    <div class="view">
    <input class="toggle" type="checkbox" checked>
                                  <label>Taste JavaScript</label>
                                  <button class="destroy"></button>
  </div>
   <input class="edit" value="Create a TodoMVC template">
</li> */
