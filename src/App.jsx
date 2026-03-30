
import './App.css'
import { Cards } from './components/Cards/Cards'
import { Footer } from './components/Footer/Footer'
import { Geadient } from './components/Geadient/Geadient'
import { Hero } from './components/Hero/Hero'
import { MidSection } from './components/MidSection/MidSection'
import { Navbar } from './components/Navbar/Navbar'
import { Pricing } from './components/Pricing/Pricing'
import { Rating } from './components/Rating/Rating'

function App() {
  

  return (
    <>
    <div className=" " >
     <Navbar/>
     <Hero></Hero>
     <Rating/>
     <MidSection/>
     <Pricing/>
     <Geadient/>
     <Footer/>
     <Cards/>
    </div>

    
    </>
  )
}

export default App
