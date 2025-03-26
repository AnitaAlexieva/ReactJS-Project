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
import { useState } from "react"
import { UserContext } from "./contexts/UserContext"
import Logout from "./components/logout/Logout"

function App() {
  const  [authData, setAuthData] = useState({});

  const userLoginHandler = (resultData) =>{
    setAuthData(resultData);
  }
  return (
    <>  
    <UserContext.Provider value={{...authData, userLoginHandler}}>
        <Header/>

          <Routes>
              <Route index element={<Home/>} />
              <Route path="/about" element={<About />} />
              <Route path="/recipes" element={<Recipes/>}/>
              <Route path="/recipes/:recipeId/details" element={<DetailsRecipe/>}/>
              <Route path="/recipes/:recipeId/edit" element={<EditRecipe/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>} />
              <Route path="/createRecipe" element={<CreateRecipe/>}/>
              <Route path="*" element={<ErrorPage/>}/>
              <Route path="/logout" element={<Logout/>}/>
          </Routes>
    
        <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App
