import About from "./components/about/About"
import DetailsRecipe from "./components/recipe-details/DetailsRecipe"
import Footer from "./components/footer.jsx/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Recipes from "./components/recipes/Recipes"
import {Route, Routes} from 'react-router'
import Register from "./components/register/Register"
import CreateRecipe from "./components/create/CreateRecipe"
import ErrorPage from "./components/error/ErrorPage"
import EditRecipe from "./components/edit/EditRecipe"
import Logout from "./components/logout/Logout"
import UserProvider from "./components/providers/UserProvider"
import AuthGuard from "./components/guards/AuthGuard"
import { ToastContainer } from "react-toastify"

function App() {
 
  return (
    <UserProvider>
         <ToastContainer/>

          <Header/>
  
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/about" element={<About />} />
                <Route path="/recipes" element={<Recipes/>}/>
                <Route path="/recipes/:recipeId/details" element={<DetailsRecipe/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>} />
                <Route element={<AuthGuard/>}>
                    <Route path="/recipe/create" element={<CreateRecipe/>}/>
                    <Route path="/logout" element={<Logout/>}/>
                    <Route path="/recipes/:recipeId/edit" element={<EditRecipe/>}/>
                </Route>
                <Route path="*" element={<ErrorPage/>}/>
            </Routes>
      
          <Footer/>
    </UserProvider>
    
  )
}

export default App
