import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'all',        // 'all' | 'active' | 'completed'
  category: 'all',      // 'all' | 'work' | 'personal' | etc.
  priority: 'all',      // 'all' | 'high' | 'medium' | 'low'
  searchTerm: '',
  sortBy: 'dueDate'     // 'dueDate' | 'priority' | 'createdAt' | 'title'
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStatusFilter: (state, action) => {
      state.status = action.payload
    },
    
    setCategoryFilter: (state, action) => {
      state.category = action.payload
    },
    
    setPriorityFilter: (state, action) => {
      state.priority = action.payload
    },
    
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
    
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    
    resetFilters: (state) => {
      state.status = 'all'
      state.category = 'all'
      state.priority = 'all'
      state.searchTerm = ''
      state.sortBy = 'dueDate'
    }
  }
})

export const { 
  setStatusFilter, 
  setCategoryFilter, 
  setPriorityFilter, 
  setSearchTerm, 
  setSortBy,
  resetFilters 
} = filtersSlice.actions

export default filtersSlice.reducer