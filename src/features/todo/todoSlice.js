import { createSlice } from '@reduxjs/toolkit';

const uniqueId = {
  currentId: 0,
  get() {
    this.currentId += 1;
    return this.currentId;
  }
};

const initialState = {
  list: [
    {
      id: uniqueId.get(),
      title: 'JS-101',
      completed: true
    },
    {
      id: uniqueId.get(),
      title: 'JS-102',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-201',
      completed: false
    },
    {
      id: uniqueId.get(),
      title: 'JS-202',
      completed: false
    }
  ],
  visibilityFilter: 'SHOW_ALL'
}



const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: uniqueId.get(),
        title: action.payload,
        completed: false
      });
    },
    toggle: (state, action) => {
      for (let todo of state.list) {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
      }
    },
    setVisibility: (state, action) => {
      state.visibilityFilter = action.payload;
    }
  }
});

export const {
  addTodo,
  toggle,
  setVisibility
} = todoSlice.actions
export default todoSlice.reducer