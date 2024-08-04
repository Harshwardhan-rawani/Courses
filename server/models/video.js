// const mongoose = require('mongoose');

// const videoSchema = new mongoose.Schema({
//     course: { type: String, required: true },
//     topics: [{
//         name: { type: String, required: true },
//         videos: [{
//             subtopic: { type: String, required: true },
//             videoPath: { type: String, required: true }
//         }]
//     }]
// });

// module.exports = mongoose.model('Video', videoSchema);
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    course: { type: String, required: true, index: true }, // Add index to the course field
    topics: [{
        image:{type: String, required: true},
        name: { type: String, required: true },
        videos: [{
            subtopic: { type: String, required: true },
            videoPath: { type: String, required: true }
        }]
    }]
}, { timestamps: true }); // Optional: adds createdAt and updatedAt timestamps

// Create indexes
videoSchema.index({ course: 1 }); // Ensures the index is created on the course field

// Remove _id from nested topics and videos
videoSchema.set('toJSON', { virtuals: true, versionKey: false, transform: (doc, ret) => {
    delete ret._id;
    ret.topics.forEach(topic => {
        delete topic._id;
        topic.videos.forEach(video => delete video._id);
    });
}});

module.exports = mongoose.model('Video', videoSchema);
