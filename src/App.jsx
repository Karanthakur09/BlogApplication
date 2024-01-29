import React, { useState, useEffect } from 'react'
import conf from './conf/conf'
import { useDispatch } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch=useDispatch();

  return (
    <h1>app in appwrite</h1>
  )
}

export default App
