import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import { ThemeProvider } from './components/ThemeProvider'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from './lib/axios'
import { Toaster } from "@/components/ui/toaster";

const App = () => {

  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const response = await axiosInstance.get("/users/get-user", {
          withCredentials: true,
        });
        return response.data;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          return null;
        }
      }
    },
  });

  if(isLoading){
    return <div>Loading...</div>
  }


  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Routes>
      <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
      <Route path="/" element={<Home />} />
    </Routes>
    <Toaster />
    </ThemeProvider>
  )
}

export default App