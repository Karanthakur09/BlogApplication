import React, { useState, useEffect } from 'react'
import authService from "./appwrite/auth"
import { useDispatch } from 'react-redux';
import { login, logout } from "./store/authSlice";
import {Header,Footer} from "./components/index";
import { Outlet } from 'react-router-dom';
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false))

  }, [])

  //now we will use conditional rendering
  return !loading ? (
    <div className="min-h-screen flex flex-wrap bg-gray-400 content-between">
      <div className="w-fit block">
        <Header/>
        <main>
          TODO:<Outlet/>
        </main>
        <Footer/>
      </div>
    </div>
  ): null
}

export default App
