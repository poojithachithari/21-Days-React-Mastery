import { useFormik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
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

const FormWithFormik = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      age: '',
      terms: false
    },
    validationSchema: toFormikValidationSchema(formSchema),
    validateOnChange: true,   // FIXED: Validate on change after touched
    validateOnBlur: true,      // FIXED: Validate on blur
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setSubmitSuccess(false)

      try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        console.log('Form submitted:', values)
        setSubmitSuccess(true)
        
        resetForm()
      } catch (error) {
        console.error('Submission failed:', error)
      } finally {
        setSubmitting(false)
      }
    }
  })

  return (
    <div>
      <h3 style={{ marginBottom: '20px', color: '#9b59b6' }}>
        Form with Formik + Zod
      </h3>

      <div style={{
        backgroundColor: '#f3e5f5',
        padding: '15px',
        borderRadius: '8px',
        marginBottom: '20px',
        fontSize: '14px'
      }}>
        <p><strong>📊 Form State (Formik features):</strong></p>
        <p>• Is Dirty: {formik.dirty ? '✅ Yes' : '❌ No'}</p>
        <p>• Is Submitting: {formik.isSubmitting ? '✅ Yes' : '❌ No'}</p>
        <p>• Is Valid: {formik.isValid ? '✅ Yes' : '❌ No'}</p>
        <p>• Touched Fields: {Object.keys(formik.touched).join(', ') || 'None'}</p>
        <p>• Errors: {Object.keys(formik.errors).length} field(s) with errors</p>
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

      <form onSubmit={formik.handleSubmit} style={{
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
            type="text"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: formik.touched.username && formik.errors.username 
                ? '2px solid #f44336' 
                : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: formik.isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {formik.touched.username && formik.errors.username && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {formik.errors.username}
            </p>
          )}
          {formik.touched.username && !formik.errors.username && formik.values.username && (
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
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: formik.touched.email && formik.errors.email 
                ? '2px solid #f44336' 
                : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: formik.isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {formik.errors.email}
            </p>
          )}
          {formik.touched.email && !formik.errors.email && formik.values.email && (
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
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: formik.touched.password && formik.errors.password 
                ? '2px solid #f44336' 
                : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: formik.isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {formik.errors.password}
            </p>
          )}
          {formik.touched.password && !formik.errors.password && formik.values.password && (
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
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: formik.touched.confirmPassword && formik.errors.confirmPassword 
                ? '2px solid #f44336' 
                : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: formik.isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {formik.errors.confirmPassword}
            </p>
          )}
          {formik.touched.confirmPassword && !formik.errors.confirmPassword && formik.values.confirmPassword && (
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
            type="number"
            name="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: formik.touched.age && formik.errors.age 
                ? '2px solid #f44336' 
                : '1px solid #ddd',
              borderRadius: '5px',
              backgroundColor: formik.isSubmitting ? '#f5f5f5' : 'white'
            }}
          />
          {formik.touched.age && formik.errors.age && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {formik.errors.age}
            </p>
          )}
          {formik.touched.age && !formik.errors.age && formik.values.age && (
            <p style={{ color: '#4CAF50', fontSize: '14px', marginTop: '5px' }}>
              ✓ Valid age!
            </p>
          )}
        </div>

        {/* Terms */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <input
              type="checkbox"
              name="terms"
              checked={formik.values.terms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              style={{ width: '20px', height: '20px' }}
            />
            <span>I agree to terms and conditions</span>
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <p style={{ color: '#f44336', fontSize: '14px', marginTop: '5px' }}>
              {formik.errors.terms}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: formik.isSubmitting ? '#ccc' : '#9b59b6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: formik.isSubmitting ? 'not-allowed' : 'pointer',
            fontWeight: 'bold'
          }}
        >
          {formik.isSubmitting ? 'Submitting...' : 'Register'}
        </button>

        {formik.dirty && (
          <button
            type="button"
            onClick={formik.handleReset}
            disabled={formik.isSubmitting}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#999',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: formik.isSubmitting ? 'not-allowed' : 'pointer',
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
          {JSON.stringify(formik.values, null, 2)}
        </pre>
      </details>
    </div>
  )
}

export default FormWithFormik