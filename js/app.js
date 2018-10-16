/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
function header() {
  const element = document.createElement('header');
  element.className = 'header';

  const h1 = document.createElement('h1');
  const text = document.createTextNode('todos');
  h1.appendChild(text);

  const input = document.createElement('input');
  input.className = "new-todo";
  input.setAttribute('placeholder', "What needs to be done?");
  input.setAttribute('autofocus', true);


  element.appendChild(h1);
  element.appendChild(input);

  return element;
}

function app() {
  const element = document.createElement('section');
  element.className = 'todoapp';
  element.appendChild(header());
  return element;
};

document.body.appendChild(app());
