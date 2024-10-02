const mongoose = require('mongoose');

const ApplicationModelSchema = new mongoose.Schema({
    CompanyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyDetail',
        required: true
    },
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    UserDetails: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    Status: {
        type: String,
        enum: ['Rejected', 'Shortlist'],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('ApplicationModel', ApplicationModelSchema);
