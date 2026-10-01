import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Users from "./pages/Users"
import About from "./pages/About"

function App() {
	return (

    <Routes>
      {/* Shared layout for all pages */}
      <Route element={<Layout />}>
      {/* Child routes are rendered inside the Layout's Outlet */}
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>

  ) 
}

export default App
