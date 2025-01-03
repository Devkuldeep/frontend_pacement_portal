import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../context/AuthContext';

const StudentForm = () => {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    studentId: user.userId,
    name: '',
    email: '',
    dateOfBirth: '',
    phoneNumber: '',
    skills: '',
    education: {
      tenth: { percentage: '', board: '', yearOfPassing: '' },
      twelfth: { percentage: '', stream:'', board: '', yearOfPassing: '' },
      ug: { isCompleted: false, cgpa: '', university: '', course: '', yearOfPassing: '' },
      pg: { isCompleted: false, cgpa: '', university: '', course: '', yearOfPassing: '' },
    },
    resume: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setFormData((prev) => {
      const keys = name.split('.'); // Handle nested properties
      let newState = { ...prev };
  
      let ref = newState; 
      keys.slice(0, -1).forEach((key) => {
        ref[key] = { ...ref[key] }; // Ensure immutability
        ref = ref[key];
      });
  
      ref[keys[keys.length - 1]] = value; // Update the property
      return newState;
    });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
  console.log(formData);
    try {
      await axios.post('http://localhost:3000/api/student/create', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      alert('Form submitted successfully!');
    } catch (error) {
      setSubmitError(error.response?.data?.message || 'Something went wrong!');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-center mb-8">Student Registration Form</h1>

        {submitError && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {submitError}
          </div>
        )}

        {/* Personal Information */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>

            {/* Gender and DOB */}
          
            <div>
              <label className="block text-sm font-medium mb-1">Gender *</label>
              <select name="gender" value={formData.gender} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth *</label>
              <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required />
            </div>
        

    {/* phone number */}
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Educational Details</h2>
         

            




               {/* Tenth Details */}
          <section className='my-4 border-4 rounded-lg p-4'>
        
          <h2 className='text-lg font-semibold mb-4'>10th Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>
              <label className="block text-sm font-medium mb-1">Board</label>
              <select name="education.tenth.board" value={formData.education.tenth.board} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required>
                <option value="">Select Board</option>
                <option value="cgbase">CGBASE</option>
                <option value="cbse">CBSE</option>
                <option value="bseb">BSEB</option>
                <option value="upmps">UPMPS</option> 
              </select>
            </div>
           
            <div>
              <label className="block text-sm font-medium mb-1">10th Percentage *</label>
              <input
                 type="number"                 
                 min="0"
                 max="100"              
                name="education.tenth.percentage"
                value={formData.education.tenth.percentage}
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
           
            <div>
              <label className="block text-sm font-medium mb-1">10th Year of Passing *</label>
              <input
                 type='date'                 
                 min="1950-01-01" 
                 max="2050-12-31"   
                name="education.tenth.yearOfPassing"
                value={formData.education.tenth.yearOfPassing}
                onChange={handleChange}               
                required
                 className="w-full border rounded-md px-3 py-2"
              />
            </div>
          </div>
          </section>

          {/* Twelfth Details */}
          <section className='my-4 border-4 rounded-lg p-4'>
          <h2 className='text-lg font-semibold mb-4'>12th Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
              <label className="block text-sm font-medium mb-1">12th Board *</label>
              <select name="education.twelfth.board" value={formData.education.twelfth.board} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required>
               
                <option value="">Select Board</option>
                <option value="cgbase">CGBASE</option>
                <option value="cbse">CBSE</option>
                <option value="bseb">BSEB</option>
                <option value="upmps">UPMPS</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">12th Stream *</label>
              <select name="education.twelfth.stream" value={formData.education.twelfth.stream} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required>
                <option value="">Select Subject</option>
                <option value="science">Science</option>
                <option value="math">Math</option>
                <option value="commerse">Commerse</option>
                <option value="art">Art</option> 
              </select>
          
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">12th Percentage *</label>
              <input
                  type="number"                 
                  min="00"
                  max="100"
                name="education.twelfth.percentage"
                value={formData.education.twelfth.percentage}
                onChange={handleChange}               
                required
                className="w-full border rounded-md px-3 py-2"
              />
            </div>
           
            
            <div>
              <label className="block text-sm font-medium mb-1">12th Year of Passing *</label>
              <input
                 type='date'                 
                  min="1950-01-01" 
                  max="2050-12-31"               
                name="education.twelfth.yearOfPassing"
                value={formData.education.twelfth.yearOfPassing}                
                onChange={handleChange}
                className="w-full border rounded-md px-3 py-2"
                required
              />
            </div>
          </div>
          </section>

         {/* Undergraduate (UG) Details */}
         <section className='my-4 border-4 rounded-lg p-4'>
           <h2 className='text-lg font-semibold mb-4'>Under Graduation Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">          

            <div>
               <label className="block text-sm font-medium mb-1">UG Course</label>
                           
              <select name="education.ug.course" value={formData.education.ug.course} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required>
                <option value="">Select Program</option>
                <option value="btech">B.Tech</option>
                <option value="bsc">BSC</option>
                <option value="bca">BCA</option>
                <option value="bba">BBA</option>
              </select>
            
             </div>          
            
             <div>
               <label className="block text-sm font-medium mb-1">UG CGPA</label>
               <input
                 type="text"                 
                 min="0"
                 max="10"
                
                 name="education.ug.cgpa"
                 value={formData.education.ug.cgpa}
                 onChange={handleChange}
                 className="w-full border rounded-md px-3 py-2"
               />
             </div>
             <div>
               <label className="block text-sm font-medium mb-1">UG University</label>
               <input
                 type="text"
                 name="education.ug.university"
                 value={formData.education.ug.university}
                 onChange={handleChange}
                 className="w-full border rounded-md px-3 py-2"
               />
             </div>
            
             <div>
               <label className="block text-sm font-medium mb-1">UG Year of Passing</label>
               <input
                 type='date'                 
                 min="1950-01-01" 
                 max="2050-12-31"   
                 name="education.ug.yearOfPassing"
                 value={formData.education.ug.yearOfPassing}
                 onChange={handleChange}
                 className="w-full border rounded-md px-3 py-2"
               />
             </div>
         
       
     
        </div>
         </section>



       

        {/* Postgraduate (PG) Details */}
        <section className='my-4 border-4 rounded-lg p-4'>
        <h2 className='text-lg font-semibold mb-4'>Post Graduation Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
       

        <div>
            <label className="block text-sm font-medium mb-1">PG Course</label>
            <select name="education.pg.course" value={formData.education.pg.course} onChange={handleChange} 
                className="w-full border rounded-md px-3 py-2" required>
                <option value="">Select Program</option>
                <option value="btech">M.Tech</option>
                <option value="mca">MCA</option>
                <option value="mba">MBA</option>
              </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">PG CGPA</label>
            <input
               type="text"                 
               min="0"
               max="10"               
               name="education.pg.cgpa"
              value={formData.education.pg.cgpa}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">PG University</label>
            <input
              type="text"
              name="education.pg.university"
              value={formData.education.pg.university}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
         
          <div>
            <label className="block text-sm font-medium mb-1">PG Year of Passing</label>
            <input
             type='date'                 
             min="1950-01-01" 
             max="2050-12-31"   
              name="education.pg.yearOfPassing"
              value={formData.education.pg.yearOfPassing}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>
        </section>
      </section>

      {/* Skills */}

      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <input
          type="text"
          name="skills"
          placeholder='Enter your skills'
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
      </section>

      {/* Resume url */}
      <section className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Add Resume</h2>
        <input
          type="text"
          name="resume"
          placeholder='url of resume'
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-2"
        />
      </section>

      {/* Submit Button */}
      <section className="text-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg text-white font-medium ${
            isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </section>
      
      </form>
    </div>
    
  );
};

export default StudentForm;

