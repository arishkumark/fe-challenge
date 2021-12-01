import store from './store';
import * as todoActions from './store/todoActions';

function addListener(eventName, selector, callback) {
  document.body.addEventListener(eventName, e => {
    if (e.target.matches(selector)) {
      return callback(e);
    }
  });
}

function handleAdd() {
  const todoInput = document.querySelector('[data-element="addTodoInput"]');
  store.dispatch(todoActions.add(todoInput.value));
}

addListener('click', '[data-element="addTodoButton"]', () => {
  handleAdd()
});

addListener('click', '[data-element="toggleTodo"]', e => {
  const id = Number(e.target.dataset.id);
  store.dispatch(todoActions.toggle(id));
});

addListener('keypress', '[data-element="addTodoInput"]', e => {
  if (e.key === 'Enter') {
    handleAdd();
  }
});

addListener('click', '[data-element="toggleFilter"]', e => {
  const filter = e.target.value;
  store.dispatch(todoActions.setVisibility(filter));
});
