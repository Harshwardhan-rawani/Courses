const Video = require('../models/Video');

const videoupload = async (req, res) => {
    const { course, topic, subtopic } = req.body;
    const image = req.files['image'][0];
    const video = req.files['video'][0];
 
    if (!video) {
        return res.status(400).send({ message: 'No video file uploaded' });
    }

    try {
        let courseDoc = await Video.findOne({ course });

        if (!courseDoc) {
            // Create a new course document with the new topic and video
            courseDoc = new Video({
                course,
                topics: [{
                    image : image.path,
                    name: topic,
                    videos: [{ subtopic, videoPath: video.path }]
                }]
            });
        } else {
            const topicname = courseDoc.topics.find(t => t.name === topic);

            if (!topicname) {
                // Add a new topic with the video
                courseDoc.topics.push({
                    image : image.path,
                    name: topic,
                    videos: [{ subtopic, videoPath: video.path }]
                });
            } else {
                const videoexist = topicname.videos.find(v => v.subtopic === subtopic);
                
                if (!videoexist) {
                    // Add the new video under the existing topic
                    topicname.videos.push({ subtopic, videoPath: video.path });
                } else {
                    // Video with the same subtopic already exists
                    return res.status(400).send({ message: 'Video already added ' });
                }
            }
        }

        await courseDoc.save();
        console.log('Course document saved successfully');
        res.send({ message: 'Video uploaded successfully', data: courseDoc });
    } catch (err) {
        console.error('Error during video upload:', err);
        res.status(500).send({ message: 'Failed to upload video', error: err.message });
    }
};

const getvideoupload = async (req, res) => {
    try {
        const course = await Video.findOne({ course: req.query.name });

        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.json(course);
    } catch (error) {
        console.error('Error during fetching video upload:', error);
        res.status(500).json({ message: error.message });
    }
};

module.exports = { videoupload, getvideoupload };
