import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    items:[
        {
      id: '1',
      title: 'Learn Redux Toolkit',
      description: 'Build a task manager with Redux',
      category: 'learning',
      priority: 'high',
      status: 'active',
      dueDate: '2024-12-20',
      createdAt: '2024-12-15T10:00:00',
      completedAt: null
    },
    {
      id: '2',
      title: 'Buy groceries',
      description: 'Milk, eggs, bread',
      category: 'personal',
      priority: 'medium',
      status: 'active',
      dueDate: '2024-12-18',
      createdAt: '2024-12-15T11:00:00',
      completedAt: null
    },
    {
      id: '3',
      title: 'Finish React project',
      description: 'Complete Day 19 Redux project',
      category: 'work',
      priority: 'high',
      status: 'completed',
      dueDate: '2024-12-19',
      createdAt: '2024-12-14T09:00:00',
      completedAt: '2024-12-16T15:30:00'
    }
    ]
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: (state,action)=>{
            const newTask = {
                id: Date.now().toString(),
                ...action.payload,
                status:'active',
                createdAt: new Date().toISOString(),
                completedAt: null
            }
            state.items.push(newTask)
        },

        // Edit existing task
    editTask: (state, action) => {
      const { id, updates } = action.payload
      const task = state.items.find(task => task.id === id)
      if (task) {
        Object.assign(task, updates)
      }
    },

    // Delete task
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload)
    },

    // Toggle task completion
    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload)
      if (task) {
        if (task.status === 'active') {
          task.status = 'completed'
          task.completedAt = new Date().toISOString()
        } else {
          task.status = 'active'
          task.completedAt = null
        }
      }
    }
  }
})

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions
export default tasksSlice.reducer
