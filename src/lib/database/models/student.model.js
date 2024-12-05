import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    studentID: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    yearOfStudy: {
        type: String,
        required: true
    },
    university: {
        type: String,
        required: true,
        trim: true
    },
    cgpa: {
        type: Number,
        min: 0,
        max: 10,
        trim: true
    },
    skills: {
        type: String,
        trim: true
    },
    jobRole: {
        type: String,
        required: true,
        trim: true
    },
    preferredLocation: {
        type: String,
        trim: true
    },
    resumeUrl: {
        type: String,
        trim: true
    },
    coverLetterUrl: {
        type: String,
        trim: true
    },
    linkedin: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema);

export default Student;