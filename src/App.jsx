import { Routes, Route } from "react-router";
import Home from '@/components/pages/Home'
import About from '@/components/pages/About'
import Contact from '@/components/pages/Contact'
import Login from '@/components/Auth/Login'  // Add this import
import Signup from '@/components/Auth/signup'  // Add this import
import CompanyRegistrationForm from "./components/pages/company/CompanyForm";
import StudentForm from "./components/pages/student/StudentForm";
import StudentProfile from "./components/pages/student/StudentProfile";
import Support from "./components/pages/student/support";
import StudentDashboard from "./components/pages/student/dashboard";
import CompanyDashboard from "./components/pages/company/CompanyDashboard";
import CompanyProfile from "./components/pages/company/CompanyProfile";
import CompanySupport from "./components/pages/company/CompanySupport";
import CollegeDashboard from "./components/pages/college/dashboard";
import CollegeProfile from "./components/pages/college/profile";
import PageNotFound from "./components/shared/PageNotFound";
import PrivateRoute from "./components/shared/PrivateRoute";
import Applications from "./components/pages/company/Applications";
import ApplicantsProfile from "./components/pages/company/ApplicantsProfile";


function App() {
  return (
    <>
      <div className="pt-16">
        <Routes>
          <Route path="*" element={<PageNotFound/>} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/company/registration" element={<CompanyRegistrationForm />} />
          <Route path="/student/registration" element={<StudentForm />} />

          {/* Student Routes */}
          <Route
                        path="student/dashboard"
                        element={
                            <PrivateRoute roles={['student']}>
                                <StudentDashboard />
                            </PrivateRoute>
                        }
                    />
         <Route
                        path="student/profile/:id"
                        element={
                            <PrivateRoute roles={['student']}>
                                <StudentProfile />
                            </PrivateRoute>
                        }
                    />
            <Route
                        path="student/support"
                        element={
                            <PrivateRoute roles={['student']}>
                                <Support />
                            </PrivateRoute>
                        }
                    />
          
         
                    {/* Company Routes */}
                    <Route
                        path="company/dashboard"
                        element={
                            <PrivateRoute roles={['company']}>
                                <CompanyDashboard />
                            </PrivateRoute>
                        }
                    />


                     <Route
                        path="company/dashboard/applications/:jobId"
                        element={
                            <PrivateRoute roles={['company']}>
                                <Applications />
                            </PrivateRoute>
                        }
                    />
                     <Route
                        path="company/dashboard/applications/:jobId/:studentId"
                        element={
                            <PrivateRoute roles={['company']}>
                                <ApplicantsProfile />
                            </PrivateRoute>
                        }
                    />
             
             <Route
                        path="company/profile/:id"
                        element={
                            <PrivateRoute roles={['company']}>
                                <CompanyProfile />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="company/support"
                        element={
                            <PrivateRoute roles={['company']}>
                                <CompanySupport />
                            </PrivateRoute>
                        }
                    />

  
       
        
          {/* College Routes */}
          <Route
                        path="college/dashboard"
                        element={
                            <PrivateRoute roles={['college']}>
                                <CollegeDashboard />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="college/profile"
                        element={
                            <PrivateRoute roles={['college']}>
                                <CollegeProfile />
                            </PrivateRoute>
                        }
                    />
                </Routes>

      </div>
    </>
  )
}

export default App
