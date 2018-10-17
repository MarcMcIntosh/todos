/*
* add imports javascript here
*/
// https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/
import { header, footer } from './views/index.js';
import store from './store';

const state = { editting: false, posts: store.getAll() };

function app() {

  const element = document.createElement('section');
  element.className = 'todoapp';
  element.appendChild(header());

  // footer
  if (Object.keys(state.posts) element.appendChild(footer());

  return element;
};

document.body.appendChild(app());
