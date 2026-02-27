import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './taskSlice'
import categoriesReducer from './categoriesSlice'
import filtersReducer from'./filtersSlice'

export const store = configureStore({
    reducer:{
        tasks: tasksReducer,
        categories: categoriesReducer,
        filters: filtersReducer
    }
})