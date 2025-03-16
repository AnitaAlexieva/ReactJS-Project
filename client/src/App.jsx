import About from "./components/about/About"
import Footer from "./components/footer.jsx/Footer"
import Gallery from "./components/gallery/Gallery"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Recipes from "./components/recipes/Recipes"

function App() {

  return (
    <>  
      <Header/>
      <Home/>
      <About/>
      <Gallery/>
      <Recipes/>
      <Footer/>
    </>
  )
}

export default App
