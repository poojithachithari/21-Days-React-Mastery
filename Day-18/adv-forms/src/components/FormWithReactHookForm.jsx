import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useState } from 'react'

const formSchema = z.object({
  username: z
    .string()
    .min(1, 'Username is required')
    .min(3, 'Username must be at least 3 characters'),
  
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Invalid email address'),
  
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be at least 6 characters'),
  
  confirmPassword: z
    .string()
    .min(1, 'Please confirm your password'),
  
  age: z
    .coerce
    .number()
    .min(18, 'You must be at least 18 years old'),
  
  terms: z
    .boolean()
    .refine(val => val === true, {
      message: 'You must accept terms and conditions'
    })
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword']
})

const FormWithReactHookForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, touchedFields },
    reset,
    watch
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',  // FIXED: Validate after first blur, then on change
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      terms: false
    }
  })

  const onSubmit = async (data) => {
    setSubmitSuccess(false)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('Form submitted:', data)
      setSubmitSuccess(true)
      
      reset()
    } catch (error) {
      console.error('Submission failed:', error)
    }
  }

  const watchAllFields = watch()

  return (
    <div>
      <h3 style={{ marginBottom: '20px', color: '#ff6b35' }}>
        Form with React Hook Form + Zod
      </h3>

      <div style={{
        backgroundColor: '#fff3e0',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <p><strong>📊 Form State (React Hook Form features):</strong></p>
        <p>• Is Dirty (modified): {isDirty ? '✅ Yes' : '❌ No'}</p>
        <p>• Is Submitting: {isSubmitting ? '✅ Yes' : '❌ No'}</p>
        <p>• Touched Fields: {Object.keys(touchedFields).join(', ') || 'None'}</p>
        <p>• Errors: {Object.keys(errors).length} field(s) with errors</p>
      </div>

      {submitSuccess && (
        <div style={{
          padding: '15px',
          backgroundColor: '#d4edda',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
          marginBottom: '20px',
          color: '#155724'
        }}>
          ✅ Registration successful!
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} style={{
        backgroundColor: '#f9f9f9',
        padding: '30px',
        borderRadius: '10px',
        maxWidth: '500px'
      }}>
        {/* Username */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Username:
          </label>
          <input
            {...register('username')}
            type="text"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: errors.username ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {errors.username && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.username.message}
            </p>
          )}
          {touchedFields.username && !errors.username && watch('username') && (
            <p style={{ color: '#4CAF50', fontSize: '14px', marginTop: '5px' }}>
              ✓ Looks good!
            </p>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            {...register('email')}
            type="email"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: errors.email ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {errors.email && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.email.message}
            </p>
          )}
          {touchedFields.email && !errors.email && watch('email') && (
            <p style={{ color: '#4CAF50', fontSize: '14px', marginTop: '5px' }}>
              ✓ Looks good!
            </p>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Password:
          </label>
          <input
            {...register('password')}
            type="password"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: errors.password ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {errors.password && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.password.message}
            </p>
          )}
          {touchedFields.password && !errors.password && watch('password') && (
            <p style={{ color: '#4CAF50', fontSize: '14px', marginTop: '5px' }}>
              ✓ Strong password!
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Confirm Password:
          </label>
          <input
            {...register('confirmPassword')}
            type="password"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: errors.confirmPassword ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {errors.confirmPassword && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.confirmPassword.message}
            </p>
          )}
          {touchedFields.confirmPassword && !errors.confirmPassword && watch('confirmPassword') && (
            <p style={{ color: '#4CAF50', fontSize: '14px', marginTop: '5px' }}>
              ✓ Passwords match!
            </p>
          )}
        </div>

        {/* Age */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Age:
          </label>
          <input
            {...register('age')}
            type="number"
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: errors.age ? '2px solid #f44336' : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {errors.age && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.age.message}
            </p>
          )}
          {touchedFields.age && !errors.age && watch('age') && (
            <p style={{ color: '#4CAF50', fontSize: '14px', marginTop: '5px' }}>
              ✓ Valid age!
            </p>
          )}
        </div>

        {/* Terms */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              {...register('terms')}
              type="checkbox"
              disabled={isSubmitting}
              style={{ width: '20px', height: '20px' }}
            />
            <span>I agree to terms and conditions</span>
          </label>
          {errors.terms && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {errors.terms.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitting ? '#ccc' : '#ff6b35',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {isSubmitting ? 'Submitting...' : 'Register'}
        </button>

        {isDirty && (
          <button
            type="button"
            onClick={() => reset()}
            disabled={isSubmitting}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#999',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              fontWeight: 'bold',
              marginTop: '10px'
            }}
          >
            Reset Form
          </button>
        )}
      </form>

      <details style={{ marginTop: '20px' }}>
        <summary style={{ cursor: 'pointer', fontWeight: 'bold' }}>
          🔍 Debug: Watch All Form Values
        </summary>
        <pre style={{
          backgroundColor: '#f5f5f5',
          padding: '15px',
          borderRadius: '5px',
          overflow: 'auto',
          fontSize: '12px',
          marginTop: '10px'
        }}>
          {JSON.stringify(watchAllFields, null, 2)}
        </pre>
      </details>
    </div>
  )
}

export default FormWithReactHookForm