import { Suspense, lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { NavigationMenuDemo } from "./components/Header/Header"
import Building from "./pages/Building"

const About = lazy(() => import("./pages/About"))
const Home = lazy(() => import("./pages/Home"))
const Projects = lazy(() => import("./pages/Projects"))
const Contato = lazy(() => import("./pages/Contato"))
const NotFoundPage = lazy(() => import("./pages/NotFound"))

export default function App() {
  return (
    <>
      <NavigationMenuDemo />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/building" element={<Building />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}
