const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = require('mongodb');

const noteSchema = new Schema({
    text: { type: String, required: true },
    user: { type: ObjectId, required: true }
}, {
    timestamps: true,
}
)


module.exports = mongoose.model('Note', noteSchema);