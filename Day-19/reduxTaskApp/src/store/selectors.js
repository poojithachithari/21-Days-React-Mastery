import { createSelector } from '@reduxjs/toolkit'

// Get all tasks
export const selectAllTasks = (state) => state.tasks.items

// Get all categories
export const selectAllCategories = (state) => state.categories.items

// Get current filters
export const selectFilters = (state) => state.filters

// Get filtered and sorted tasks (MEMOIZED!)
export const selectFilteredTasks = createSelector(
  [selectAllTasks, selectFilters],
  (tasks, filters) => {
    let filtered = tasks

    // Filter by status
    if (filters.status !== 'all') {
      filtered = filtered.filter(task => task.status === filters.status)
    }

    // Filter by category
    if (filters.category !== 'all') {
      filtered = filtered.filter(task => task.category === filters.category)
    }

    // Filter by priority
    if (filters.priority !== 'all') {
      filtered = filtered.filter(task => task.priority === filters.priority)
    }

    // Filter by search term
    if (filters.searchTerm) {
      const searchLower = filters.searchTerm.toLowerCase()
      filtered = filtered.filter(task =>
        task.title.toLowerCase().includes(searchLower) ||
        task.description.toLowerCase().includes(searchLower)
      )
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (filters.sortBy) {
        case 'dueDate':
          return new Date(a.dueDate) - new Date(b.dueDate)
        
        case 'priority': {
          const priorityOrder = { high: 1, medium: 2, low: 3 }
          return priorityOrder[a.priority] - priorityOrder[b.priority]
        }
        
        case 'createdAt':
          return new Date(b.createdAt) - new Date(a.createdAt)
        
        case 'title':
          return a.title.localeCompare(b.title)
        
        default:
          return 0
      }
    })

    return sorted
  }
)

// Get task statistics
export const selectTaskStats = createSelector(
  [selectAllTasks],
  (tasks) => {
    const total = tasks.length
    const active = tasks.filter(t => t.status === 'active').length
    const completed = tasks.filter(t => t.status === 'completed').length
    
    const byCategory = tasks.reduce((acc, task) => {
      acc[task.category] = (acc[task.category] || 0) + 1
      return acc
    }, {})

    const byPriority = tasks.reduce((acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1
      return acc
    }, {})

    return {
      total,
      active,
      completed,
      byCategory,
      byPriority
    }
  }
)