import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [
    { id: 'work', name: 'Work', color: '#3498db' },
    { id: 'personal', name: 'Personal', color: '#e74c3c' },
    { id: 'learning', name: 'Learning', color: '#2ecc71' },
    { id: 'health', name: 'Health', color: '#9b59b6' },
    { id: 'shopping', name: 'Shopping', color: '#f39c12' },
    { id: 'other', name: 'Other', color: '#95a5a6' }
  ]
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      const newCategory = {
        id: action.payload.name.toLowerCase().replace(/\s+/g, '-'),
        name: action.payload.name,
        color: action.payload.color || '#95a5a6'
      }
      state.items.push(newCategory)
    },
    
    deleteCategory: (state, action) => {
      state.items = state.items.filter(cat => cat.id !== action.payload)
    }
  }
})

export const { addCategory, deleteCategory } = categoriesSlice.actions
export default categoriesSlice.reducer