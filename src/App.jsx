import { BrowserRouter, Routes, Route } from "react-router";
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import CompanyRegistrationForm from "./components/pages/company/CompanyForm";
import StudentForm from "./components/pages/student/StudentForm";
import StudentProfile from "./components/pages/student/StudentProfile";
import Support from "./components/pages/student/support";
import StudentDashboard from "./components/pages/student/dashboard";
import CompanyDashboard from "./components/pages/company/CompanyDashboard";
import CompanyProfile from "./components/pages/company/CompanyProfile";
import CompanySupport from "./components/pages/company/CompanySupport";
function App() {
 
  const role = true;

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




  {/* //Student Route */}

 
    <Route path="student/dashboard" element={<StudentDashboard />} />
    <Route path="student/profile/:id" element={<StudentProfile />} />
    <Route path="student/support" element={<Support />} />
  
    <Route path="company/dashboard" element={<CompanyDashboard/>} />
    <Route path="company/profile/:id" element={<CompanyProfile/>} />
    <Route path="company/support" element={<CompanySupport />} />


  

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
