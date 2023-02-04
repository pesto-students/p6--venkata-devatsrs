const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const financialSchema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    income: {
        type: Number,
        required: true
    },
    expenses: {
        type: Number,
        required: true
    },
    savings: {
        type: Number,
        required: true
    },
    financialYear: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Financial', financialSchema);
