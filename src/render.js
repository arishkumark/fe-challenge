function renderApp(input, renderFilters, todoList) {
  return `<div>${input}${renderFilters}${todoList}</div>`;
}

function renderForm() {
  return `<div class="form">
    <input type="text" data-element="addTodoInput">
    <button data-element="addTodoButton">Add</button>
  </div>`;
}

function renderTodos(todoItems) {
  return `<ul class="todos">${todoItems}</ul>`;
}

function renderTodoItem(todo) {
  return `<li class="${`todos__item todos__item_${todo.completed && 'checked'}`}">
    <input type="checkbox" data-element="toggleTodo" data-id="${todo.id}"${todo.completed ? ' checked' : ''}>
    ${todo.title}
  </li>`;
}

function renderFilters(filter) {
  const filterData = [
    {
      id: 'showAll',
      label: 'Show all',
      value: 'SHOW_ALL'
    },
    {
      id: 'showOpen',
      label: 'Show Open',
      value: 'SHOW_OPEN'
    },
    {
      id: 'showClosed',
      label: 'Show Closed',
      value: 'SHOW_CLOSED'
    }
  ]
  return `<div class="todoFilter">
  ${
    filterData.map((item) => (
      `<span>
        <input
          id=${item.id}
          type="radio"
          value=${item.value}
          name=${item.id}
          ${item.value === filter ? ' checked' : ''}
          data-element="toggleFilter"
        />
        <label for=${item.id}>${item.label}</label>
      </span>`
    )).join('')
  }
  </div>`
}

export default (element, state) => {
  let todos = state.todos;
  if (state.visibilityFilter === 'SHOW_OPEN') {
    todos = state.todos.filter(todo => !todo.completed)
  }
  if (state.visibilityFilter === 'SHOW_CLOSED') {
    todos = state.todos.filter(todo => todo.completed)
  }
  const todoItems = todos.map(renderTodoItem).join('');
  element.innerHTML = renderApp(
    renderForm(),
    renderFilters(state.visibilityFilter),
    renderTodos(todoItems)
  );
}
