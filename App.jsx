import {usestate} from "react"
import Form from "./assets/pages/Form";
 import Login from "./assets/pages/Login";
import Home from "./assets/pages/home";
import About from "./assets/pages/about";
import Contact from "./assets/pages/contact";
import Error from "./assets/pages/error";
import {BrowserRouter ,Routes,Route} from'react-router-dom'
import ProtectedRoutes from "./assets/components/ProtectedRoute";
import './App.css';
function App() {
 

  return (
    <>
<BrowserRouter>

<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/form" element={<ProtectedRoutes><Form/></ProtectedRoutes>}/>
<Route path="*" element={<Error/>}/>

</Routes>

</BrowserRouter>
    </>
  )
}

export default App
