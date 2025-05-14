import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LayOut from './components/LayOut'
import Home from './pages/Home'
import Write from './pages/Write'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import BlogDetail from './pages/BlogDetail'
import { ThemeContextProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import PrivateRoute from './components/PrivateRoutes'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />}>
        <Route index element={ <Home />}/>
        <Route path="write" element={<PrivateRoute><Write /> </PrivateRoute>} />
        <Route path="profile" element={<PrivateRoute> <Profile /> </PrivateRoute> } />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Route>
    )
  )

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
      <RouterProvider router={router} />
    </div>

  )
}

export default App
