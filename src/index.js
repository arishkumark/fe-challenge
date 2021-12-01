import './main.css';

import store from './store';
import render from './render';
import './registerEventListeners';

const rootElement = document.getElementById('demo');

store.subscribe(() => render(rootElement, store.getState()));
render(rootElement, store.getState());
