import { useState } from 'react'
import './App.css'
import UseRefDemo from './components/UseRefDemo'
import FlushSyncDemo from './components/FlushSyncDemo'

function App() {

  return (
    <>
      <UseRefDemo/>
      <FlushSyncDemo/>
    </>
  )
}

export default App
