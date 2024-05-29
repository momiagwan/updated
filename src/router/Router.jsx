import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/services'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import PostDetail from '../pages/PostDetail'
import Register from '../pages/Register'
import UserProfile from '../pages/UserProfile'
import EditPost from '../pages/EditPost'
import DeletePost from '../pages/DeletePost'
import CreatePosts from '../pages/CreatePosts'
import Authors from '../pages/Authors'
import Authorposts from '../pages/Authorposts'
import CategoryPosts from '../pages/CategoryPosts'
import Dashboard from '../pages/Dashboard'
import Founders from '../pages/founders'
import Election from '../pages/Election'
import Contact from '../pages/Contact'
import Clan from '../pages/Clan'




const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    {['home', '/', ].map(path => <Route path={path} element={<Home />} />)}
        <Route  path='/authors' element={<Authors/>}/>
        <Route  path='/posts/user/:id' element={<Authorposts/>}/>
        <Route  path='/posts/categories' element={<CategoryPosts/>}/>
        <Route path='/services'element={<Services/>}/>
        <Route  path='/create' element={<CreatePosts/>}/>
       {/* <Route  path='/' element={<DeletePost/>}/>*/}
        <Route  path='/myposts/:id' element={<Dashboard/>}/>
        
        <Route path='/elections' element={<Election/>}/>
        <Route  path='/posts/:id/edit' element={<EditPost/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/logout' element={<Logout/>}/>
        <Route  path='/post/:id' element={<PostDetail/>}/>
        <Route  path='/register' element={<Register/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route  path='/profile/:id' element={<UserProfile/>}/>
        <Route  path='/founders' element={<Founders/>}/>
        <Route path="/clans" element={<Clan/>}/>
        <Route  path='*' element={<ErrorPage/>}/>
        
        
        
    </Routes>
    <Footer/>
   
   
    
    </BrowserRouter>
    
    </>
  )
}

export default Router