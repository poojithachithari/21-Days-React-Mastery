import './App.css'
import FormWithFormik from './components/FormWithFormik'
import FormWithReactHookForm from './components/FormWithReactHookForm'
import FormWithUseFormStatus from './components/FormWithUseFormStatus'

function App() {
  

  return (
    <>
      <FormWithUseFormStatus/>
      <FormWithReactHookForm/>
      <FormWithFormik/>
    </>
  )
}

export default App
