/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
import { header, footer } from './views/index.js';
import store from './store.js';

const state = { editting: false, posts: store.getAll() };

function app() {

  const element = document.createElement('section');
  element.className = 'todoapp';
  element.appendChild(header(store));

  // footer
  if (Object.keys(state.posts).length) element.appendChild(footer());

  return element;
};

document.body.appendChild(app());
