import About from "./components/about/About"
import DetailsRecipe from "./components/detailsRecipe/DetailsRecipe"
import Footer from "./components/footer.jsx/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login"
import Recipes from "./components/recipes/Recipes"
import {Route, Routes} from 'react-router'
import Register from "./components/register/Register"
import CreateRecipe from "./components/create/CreateRecipe"

function App() {

  return (
    <>  
      <Header/>

         <Routes>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes/>}/>
            <Route path="/recipesDetails" element={<DetailsRecipe/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/createRecipe" element={<CreateRecipe/>}/>
         </Routes>
  
      <Footer/>
    </>
  )
}

export default App
