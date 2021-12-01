import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetch', async({pageNumber=1, limit=5}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?_page=${pageNumber}&_limit=${limit}`);
  return res.json();
})

export const updateTodos = createAsyncThunk('todos/update', async(data) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${data.id}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      completed: !data.completed,
      userId: data.userId,
    }),
  });
  return res.json();
})

const initialState = {
  list: [],
  visibilityFilter: 'SHOW_ALL',
  status: null
}



const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        id: state.list.length + 1,
        title: action.payload.inputVal,
        completed: false,
        userId: action.payload.userId
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.list = action.payload
      state.status = 'success'
    })
    builder.addCase(fetchTodos.rejected, (state) => {
      state.status = 'error'
    })

    builder.addCase(updateTodos.pending, (state) => {
      state.status = 'pending'
    })
    builder.addCase(updateTodos.fulfilled, (state, action) => {
      for (let todo of state.list) {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      }
      state.status = 'success'
    })
    builder.addCase(updateTodos.rejected, (state) => {
      state.status = 'error'
    })
  }
});

export const {
  addTodo,
  toggle,
  setVisibility
} = todoSlice.actions
export default todoSlice.reducer