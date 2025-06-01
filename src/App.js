import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import SocialSidebar from "./components/SocialSidebar"
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom' 
import RoiKids from "./pages/RoiKids"
import ScrollToTop from "./ScrollToTop"
import ToDoList from "./pages/ToDoList"

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <ScrollToTop/>
    <div className="app">
      <Routes>
        
        <Route path ="/" 
        element = {
          <>
      <Header />
      <div className="main-content">
        <SocialSidebar />
        <Hero />
        
      </div>
      <About/>
      <Projects />
      <Contact/>
      <Footer/>
      </>} />
      <Route path="/roikids" element={<RoiKids/>}/>
      <Route path="/todolist" element={<ToDoList/>}/>
      </Routes>
     </div>
     </BrowserRouter>
  )
}

export default App
