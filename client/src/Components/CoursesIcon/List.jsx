import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoDocumentSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
function List() {
    const [openSection, setOpenSection] = useState(null);
    const { name } = useParams();
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        const fetchCourseData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/upload`, {
                    params: { name },
                });
                setCourseData(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching course data:', error);
            }
        };

        fetchCourseData();
    }, [name]);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    if (!courseData) return <div>Loading...</div>;

    return (
        <div id="accordion-collapse" data-accordion="collapse">
            {courseData.topics.map((topic, topicIndex) => (
                <div key={topicIndex} className='my-4'>
                    <h2 id={`accordion-collapse-heading-${topicIndex}`}>
                        <button
                            type="button"
                            className={`flex items-center justify-between w-full p-5 font-medium group rtl:text-right text-white border border-b-0 border-gray-200  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-green-300 dark:hover:bg-gray-800 gap-3 ${openSection === topicIndex ? 'bg-green-500 dark:bg-green-500' : 'bg-green-400'}`}
                            onClick={() => toggleSection(topicIndex)}
                            aria-expanded={openSection === topicIndex}
                            aria-controls={`accordion-collapse-body-${topicIndex}`}
                        >
                            <span className={` capitalize hover:text-white`}>{topicIndex+1}. {topic.name}</span>
                            <svg
                                data-accordion-icon=""
                                className={`w-3 h-3 transform ${openSection === topicIndex ? 'rotate-180' : ''}`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id={`accordion-collapse-body-${topicIndex}`}
                        className={`p-5 border-2 border-gray-200 dark:border-gray-700 ${openSection === topicIndex ? '' : 'hidden'}`}
                        aria-labelledby={`accordion-collapse-heading-${topicIndex}`}
                    >
                        <div className="relative overflow-x-auto shadow-md ">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase border dark:text-gray-400">
                                    <tr className='text-center'>
                                        <th scope="col" className="px-6 py-3 bg-orange-300 dark:bg-gray-800">Thumbnail</th>
                                        <th scope="col" className="px-6 py-3 bg-orange-300">Video</th>
                                        <th scope="col" className="px-6 py-3 bg-orange-300">Material</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {topic.videos.map((video, videoIndex) => (
                                        <tr key={videoIndex} className="border-b text-center border-gray-200 dark:border-gray-700">
                                            <td className="px-6 py-4  dark:bg-gray-800 w-full flex justify-center"><img src={`${import.meta.env.VITE_API_URL}/${topic.image}`} className='md:w-16 md:h-16 w-14 h-14' alt="" /></td>
                                      <td className="px-6 py-4 w-full"><Link to={`${import.meta.env.VITE_API_URL}/${video.videoPath}`} className='hover:underline text-md'> {video.subtopic}</Link></td>
                                        <td className='text-3xl px-6 py-4  text-gray-700 w-full  '><IoDocumentSharp/></td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;
