import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Components/Login/Login';
import About from './Pages/About/About';
import Course from './Pages/Course/Course';
import Service from './Pages/Service/Service';
import Contact from './Pages/Contact/Contact';
import CodeRunner from './Pages/contest/CodeRunner';
import Enroll from './Components/CoursesIcon/Enroll';
import VideoUploadForm from './Admin/videoupload';
import AdminHome from './Admin/AdminHome';
import Sidebar from './Admin/Sidebar';
import Dashbord from './Admin/Dashbord';
import Courses from './Admin/Courses';
import Videoplayer from './Components/videoplayer/videoplayer';
import Videos from './Admin/Videos';
import Showlecture from './Admin/Showlecture';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter basename="/">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Course/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/compiler" element={<CodeRunner/>} />
          <Route path="/video/:name" element={<Videoplayer/>} />
          
          <Route path="/admin" element={<><Sidebar/><AdminHome/></>} />
          <Route path="/enroll/:name" element={<Enroll/>} />
          {/* admin */}
          <Route path="/admin/*" element={<Sidebar />}>
             <Route path="" element={<Dashbord />} />
             <Route path="courses" element={<Courses />} />
             <Route path="videos" element={<Videos/>} />
             <Route path="videos/:name" element={<Showlecture/>} />
             <Route path="courses/:name" element={<VideoUploadForm/>} />
         
        </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;