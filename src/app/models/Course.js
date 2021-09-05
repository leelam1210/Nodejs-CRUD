
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoosDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    // _id: {type: Number},
    name: { type: String, require: true },
    description: { type: String },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, require: true },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    // _id: false,
    timestamps: true,
});
// add plugin
mongoose.plugin(slug);
Course.plugin(mongoosDelete, { 
    deletedAt: true, 
    overrideMethods: 'all' 
});

module.exports = mongoose.model('Course', Course);

