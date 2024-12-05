import React from "react";
import ReactDOM from "react-dom";
import StudentProfile from "./StudentProfile";

const studentData = {
  name: "Kuldeep Patel",
  email: "kuldeep@university.edu",
  studentId: "ST2423001",
  department: "Computer Science",
  course: "B.Tech",
  cgpa: 3.8,
  resume: "https://storage.cloud.com/resumes/alex_thompson.pdf",
  skills: ["Python", "Java", "React", "Node.js"],
  experience: [
    {
      title: "Software Developer Intern",
      company: "TechCorp",
      duration: "3 months",
      description: "Developed full-stack applications using MERN stack",
    },
  ],
  education: {  
    tenth: {
      percentage: 92,
      board: "CBSE",
      yearOfPassing: 2018,
    },
    twelfth: {
      percentage: 88,
      board: "CBSE",
      yearOfPassing: 2020,
    },
    ug: {
      isCompleted: true,
      cgpa: 8.5,
      university: "Technical University",
      course: "Computer Science",
      yearOfPassing: 2024,
    },
    pg: {
      isCompleted: false,
    },
  },
  placementStatus: {
    isPlaced: true,
    company: "TechServe Solutions",
    package: 85000,
    jobRole: "Junior Developer",
  },
  appliedJobs: [
    {
      jobId: "507f1f77bcf86cd799439011",
      status: "accepted",
    },
  ],
  phoneNumber: "555-0123",
  linkedin: "linkedin.com/in/alexthompson",
};

ReactDOM.render(
  <StudentProfile student={studentData} />,
  document.getElementById("root")
);
