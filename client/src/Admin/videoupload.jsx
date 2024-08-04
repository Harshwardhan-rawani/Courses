import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const VideoUploadForm = () => {
    const params = useParams();
    const [name, setName] = useState('');
    const [topic, setTopic] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("course", params.name);
        formData.append('topic', name);
        formData.append('subtopic', topic);
        formData.append('image', image);
        formData.append('video', video);

        try {
            const res = await axios.post('http://localhost:8000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success(res.data.message);
            setMessage('Video uploaded successfully!');
        } catch (err) {
            setMessage('Failed to upload video');
            toast.error(err.response?.data?.message || 'Failed to upload video');
        }
    };

    return (
        <aside className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800 capitalize">{params.name} Video</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="image" className='text-gray-700'>Thumbnail</label>
                    <input
                        className="w-full px-4 py-2 border-0 focus:outline-none text-black"
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Topic Name:</label>
                    <input
                        className="w-full px-4 py-2 border-0 text-black  border-b-2 focus:ring-0 focus:border-orange-400"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Subtopic Name:</label>
                    <input
                        className="w-full px-4 py-2 border-0 border-b-2 text-black focus:ring-0 focus:border-orange-400"
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="video" className='text-gray-700'>Video</label>
                    <input
                        className="w-full px-4 py-2 border-0 focus:outline-none text-black focus:ring-2 focus:ring-blue-500"
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={(e) => setVideo(e.target.files[0])}
                        required
                    />
                </div>
                <motion.button
                    type="submit"
                    className="w-full py-2 bg-orange-500 text-white font-bold hover:bg-orange-400"
                    whileTap={{
                        scale: 0.9,
                        transition: { type: 'spring', stiffness: 300, damping: 20 }
                    }}
                >
                    Upload
                </motion.button>
            </form>
          
        </aside>
    );
};

export default VideoUploadForm;
