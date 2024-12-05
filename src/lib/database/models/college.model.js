import mongoose from 'mongoose';

const collegeSchema = new mongoose.Schema({
    collegeName: {
        type: String,
        required: true,
        trim: true
    },
    collegeCode: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    placementHead: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        }
    },
    departments: [{
        type: String,
        trim: true
    }],
    placementStats: {
        totalStudents: {
            type: Number,
            default: 0
        },
        studentsPlaced: {
            type: Number,
            default: 0
        },
        avgPackage: {
            type: Number,
            default: 0
        },
        highestPackage: {
            type: Number,
            default: 0
        }
    },
    activeCompanies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }],
    registeredStudents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }],
    website: {
        type: String,
        trim: true
    },
    establishedYear: {
        type: Number,
        trim: true
    }
}, {
    timestamps: true
});

const College = mongoose.models.College || mongoose.model('College', collegeSchema);

export default College;