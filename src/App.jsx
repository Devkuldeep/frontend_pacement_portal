import { BrowserRouter, Routes, Route } from "react-router";
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import CompanyRegistrationForm from "./components/pages/company/companyragistration";
import StudentForm from "./components/pages/student/StudentForm";
function App() {

  return (
    <>
    <div className="pt-16">
    <Routes>
  <Route path="*" element={<h1>Not Found</h1>} />

  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact/>} />


  <Route path="/company/registration" element={<CompanyRegistrationForm />} />
  <Route path="/student/registration" element={<StudentForm />} />
 
  

  {/* <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route> */}

  
</Routes>

     
</div>
    </>
  )
}

export default App
