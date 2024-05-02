import { NavigationMenuDemo } from "./components/Header/Header"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Contato from "./pages/Contato"

import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFound"


export default function App() {

return (
  <>
    <BrowserRouter>
    <NavigationMenuDemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </>
)

}
  