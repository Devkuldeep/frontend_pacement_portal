import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
        trim: true
    },
    contactPerson: {
        type: String,
        required: true,
        trim: true
    },
    contactEmail: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    contactPhone: {
        type: String,
        trim: true
    },
    companyWebsite: {
        type: String,
        required: true,
        trim: true
    },
    companyType: {
        type: String,
        required: true,
        trim: true
    },
    industryType: {
        type: String,
        required: true,
        trim: true
    },
    companyAddress: {
        type: String,
        required: true,
        trim: true
    },
    numberOfEmployees: {
        type: Number,
        required: true,
        min: 1
    },
    companyDescription: {
        type: String,
        required: true,
        trim: true
    },
    internshipAvailability: {
        type: Boolean,
        default: false
    },
  
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Update the timestamp when document is modified
companySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});

const Company = mongoose.models.Company || mongoose.model('Company', companySchema);

export default Company;