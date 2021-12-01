import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';
import TodoList from './TodoList';
import { addTodo } from './todoSlice';



const Todo = () => {
  const[inputVal, setInputVal] = useState('')
  const todos = useSelector(store => store.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={() => dispatch(addTodo(inputVal))}>Add</button>
      <Filter data={todos.visibilityFilter} />
      <TodoList data={todos.list} filter={todos.visibilityFilter} />
    </div>
  )
}

export default Todo;
