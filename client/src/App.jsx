import About from "./components/about/About"
import Footer from "./components/footer.jsx/Footer"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Recipes from "./components/recipes/Recipes"
import {Route, Routes} from 'react-router'

function App() {

  return (
    <>  
      <Header/>

         <Routes>
            <Route index element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes" element={<Recipes/>}/>
         </Routes>
  
      <Footer/>
    </>
  )
}

export default App
