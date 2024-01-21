import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import conf from './conf/conf'

function App() {
  const [count, setCount] = useState(0)
  console.log(conf.appWriteURL);

  return (
    <h1>app in appwrite</h1>
  )
}

export default App
