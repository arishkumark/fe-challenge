import React from 'react';
import { useDispatch } from 'react-redux';
import { toggle } from './todoSlice';

const TodoList = ({ data, filter }) => {
  const dispatch = useDispatch();
  let listData = data;
  if (filter === 'SHOW_OPEN') {
    listData = data.filter(todo => !todo.completed)
  }
  if (filter === 'SHOW_CLOSED') {
    listData = data.filter(todo => todo.completed)
  }
  return (
    <div>
      <ul>
      {
        listData.map((item, index) => (
          <li key={`list${index}`} class={`todoList${item.completed && ' checked'}`}>
            <input
              type="checkbox"
              data-id={item.id}
              value={item.title}
              checked={item.completed ? 'checked' : ''}
              onChange={() => dispatch(toggle(item.id))}
            />
            <label>{item.title}</label>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoList;
