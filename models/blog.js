const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Name field is required']

    },
    content: {
        type: String,
        required: [true, 'Please provide a minimum of 100 words']

    },
    author: {
        type: String,
        required: [true, 'The author name is required']
    },
    Date: {
        type: Date,
        default: Date.now
       
    }
});

const blog = mongoose.model('blog',BlogSchema);

module.exports = blog;
