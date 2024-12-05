import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    studentId: "",
    department: "",
    course: "",
    cgpa: "",
    resume: "",
    phoneNumber: "",
    linkedin: "",
    skills: "",
    education: {
      tenth: { percentage: "", board: "", yearOfPassing: "" },
      twelfth: { percentage: "", board: "", yearOfPassing: "" },
      ug: { isCompleted: false, cgpa: "", university: "", course: "", yearOfPassing: "" },
      pg: { isCompleted: false, cgpa: "", university: "", course: "", yearOfPassing: "" },
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (e, section, field) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [section]: { ...formData.education[section], [field]: value },
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Student Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Student ID</label>
            <input
              type="text"
              name="studentId"
              value={formData.studentId}
              onChange={handleChange}
              placeholder="S12345"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+123456789"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>

        {/* Education Details */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Education Details</h3>

          {/* Tenth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tenth Percentage</label>
              <input
                type="number"
                name="tenth.percentage"
                value={formData.education.tenth.percentage}
                onChange={(e) => handleNestedChange(e, "tenth", "percentage")}
                placeholder="80"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Board</label>
              <input
                type="text"
                name="tenth.board"
                value={formData.education.tenth.board}
                onChange={(e) => handleNestedChange(e, "tenth", "board")}
                placeholder="CBSE"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year of Passing</label>
              <input
                type="number"
                name="tenth.yearOfPassing"
                value={formData.education.tenth.yearOfPassing}
                onChange={(e) => handleNestedChange(e, "tenth", "yearOfPassing")}
                placeholder="2016"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

           {/* 12th */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Tenth Percentage</label>
              <input
                type="number"
                name="tenth.percentage"
                value={formData.education.tenth.percentage}
                onChange={(e) => handleNestedChange(e, "tenth", "percentage")}
                placeholder="80"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Board</label>
              <input
                type="text"
                name="tenth.board"
                value={formData.education.tenth.board}
                onChange={(e) => handleNestedChange(e, "tenth", "board")}
                placeholder="CBSE"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year of Passing</label>
              <input
                type="number"
                name="tenth.yearOfPassing"
                value={formData.education.tenth.yearOfPassing}
                onChange={(e) => handleNestedChange(e, "tenth", "yearOfPassing")}
                placeholder="2016"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Undergraduate */}
          <div>
            <h4 className="text-md font-semibold">Undergraduate</h4>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={formData.education.ug.isCompleted}
                onChange={(e) => handleNestedChange(e, "ug", "isCompleted")}
                className="w-5 h-5 text-blue-500 focus:ring-blue-500"
              />
              <label className="text-sm font-medium">Completed</label>
            </div>
            {formData.education.ug.isCompleted && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">CGPA</label>
                  <input
                    type="number"
                    name="ug.cgpa"
                    value={formData.education.ug.cgpa}
                    onChange={(e) => handleNestedChange(e, "ug", "cgpa")}
                    placeholder="8.5"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">University</label>
                  <input
                    type="text"
                    name="ug.university"
                    value={formData.education.ug.university}
                    onChange={(e) => handleNestedChange(e, "ug", "university")}
                    placeholder="XYZ University"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Course</label>
                  <input
                    type="text"
                    name="ug.course"
                    value={formData.education.ug.course}
                    onChange={(e) => handleNestedChange(e, "ug", "course")}
                    placeholder="B.Tech"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* post graduate */}
          <div>
            <h4 className="text-md font-semibold">Undergraduate</h4>
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={formData.education.ug.isCompleted}
                onChange={(e) => handleNestedChange(e, "ug", "isCompleted")}
                className="w-5 h-5 text-blue-500 focus:ring-blue-500"
              />
              <label className="text-sm font-medium">Completed</label>
            </div>
            {formData.education.ug.isCompleted && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">CGPA</label>
                  <input
                    type="number"
                    name="ug.cgpa"
                    value={formData.education.ug.cgpa}
                    onChange={(e) => handleNestedChange(e, "ug", "cgpa")}
                    placeholder="8.5"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">University</label>
                  <input
                    type="text"
                    name="ug.university"
                    value={formData.education.ug.university}
                    onChange={(e) => handleNestedChange(e, "ug", "university")}
                    placeholder="XYZ University"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Course</label>
                  <input
                    type="text"
                    name="ug.course"
                    value={formData.education.ug.course}
                    onChange={(e) => handleNestedChange(e, "ug", "course")}
                    placeholder="B.Tech"
                    className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-medium mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="JavaScript, React, Node.js"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
