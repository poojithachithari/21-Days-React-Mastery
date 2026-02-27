import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { addTask } from '../store/taskSlice'
import { selectAllCategories } from '../store/selectors'

// Zod validation schema
const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').min(3, 'Title must be at least 3 characters'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Please select a category'),
  priority: z.enum(['high', 'medium', 'low'], { required_error: 'Please select priority' }),
  dueDate: z.string().min(1, 'Due date is required')
})

const AddTaskForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch()
  const categories = useSelector(selectAllCategories)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: '',
      description: '',
      category: '',
      priority: 'medium',
      dueDate: ''
    }
  })

  const onSubmit = (data) => {
    dispatch(addTask(data))
    reset()
    setIsOpen(false)
  }

  if (!isOpen) {
    return (
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setIsOpen(true)}
          style={{
            padding: '15px 30px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          ➕ Add New Task
        </button>
      </div>
    )
  }

  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0 }}>➕ Add New Task</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Title:
          </label>
          <input
            {...register('title')}
            type="text"
            style={{
              width: '100%',
              padding: '10px',
              border: errors.title ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.title && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Description:
          </label>
          <textarea
            {...register('description')}
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              border: errors.description ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px',
              fontFamily: 'inherit'
            }}
          />
          {errors.description && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Category */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Category:
          </label>
          <select
            {...register('category')}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.category ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            <option value="">Select category...</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Priority */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Priority:
          </label>
          <select
            {...register('priority')}
            style={{
              width: '100%',
              padding: '10px',
              border: errors.priority ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          >
            <option value="low">🟢 Low</option>
            <option value="medium">🟡 Medium</option>
            <option value="high">🔴 High</option>
          </select>
          {errors.priority && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.priority.message}
            </p>
          )}
        </div>

        {/* Due Date */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Due Date:
          </label>
          <input
            {...register('dueDate')}
            type="date"
            style={{
              width: '100%',
              padding: '10px',
              border: errors.dueDate ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '4px',
              fontSize: '16px'
            }}
          />
          {errors.dueDate && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.dueDate.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            type="submit"
            style={{
              padding: '12px 24px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Add Task
          </button>
          <button
            type="button"
            onClick={() => {
              setIsOpen(false)
              reset()
            }}
            style={{
              padding: '12px 24px',
              backgroundColor: '#999',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTaskForm