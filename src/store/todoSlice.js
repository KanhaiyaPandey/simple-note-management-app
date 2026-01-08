import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    isLoading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        createdAt: new Date().toISOString(),
      })
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload)
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { addTodo, deleteTodo, setLoading } = todoSlice.actions
export default todoSlice.reducer

