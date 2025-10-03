import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import AuthPage from './pages/authPage/authPage.jsx'
import CreatePage from './pages/createPage/createPage.jsx'
import PostPage from './pages/postPage/postPage.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import SearchPage from './pages/searchPage/searchPage.jsx'
import UserProfilePage from './pages/userProfilePage/userProfilePage.jsx'

import './index.css'
import MainLayout from './pages/Layouts/mainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Homepage />}/>
          <Route path='/pin/:id' element={<PostPage />}/>
          <Route path='/create' element={<CreatePage />}/>
          <Route path='/search' element={<SearchPage />}/>
          <Route path='/:username' element={<UserProfilePage />}/>
        </Route>
        
        <Route path='/auth' element={<AuthPage />}/>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
