import { NavigationMenuDemo } from "./components/Header/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contato from "./pages/Contato"

import { BrowserRouter, Route, Routes } from "react-router-dom";


export default function App() {

return (
  <>
    <NavigationMenuDemo />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
    <Home />  
  </>
)

}
  