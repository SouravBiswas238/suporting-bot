import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home.js';
import Footer from './components/Shared/Footer/Footer.js';
import Login from './components/Pages/Login/Login.js';
import Register from './components/Pages/Register/Register.js';

// import { UserStoreProvider } from './stateManagement/UserContext/UserContextStore';

function App() {

  // console.log('see current location', url)
  return (
    <div className='transition-all duration-500 bg-[#F3F3F3] dark:bg-[#0b1120]'>
      {/* <UserStoreProvider> */}
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/*   
          <Route path="/freeResource" element={<FreeResource />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/lod" element={<Loading />}></Route>
      
          <Route path="/forgetPassword" element={<ForgetPassword />}></Route>

          <Route path="/admin" element={<MainAdmin />}>
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route path="notifications" element={<Notifications />}></Route>
 
            <Route path="postBlogs" element={<PostBlogs />}></Route>
            <Route path="admins" element={<AdminList />}></Route>
          </Route> */}



        {/* user profile route */}




        {/* <Route path="userDashboard" element={<UserDashboard />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>


       
        <Route path="/user-dashboard" element={<UserDashboardMain />}>
          <Route index element={<UserDashboard />} />
          <Route path="profile" element={<UserDashboard />} />
          <Route path="about" element={<UserDashboardAbout />} />
          <Route path="skills" element={<UserDashboardSkills />} />
          <Route path="featured" element={<UserDashboardFeatured />} />
          <Route path="experience" element={<UserDashboardExperience />} />
          <Route path="courses" element={<UserDashboardCourses />} />
          <Route path="projects" element={<UserDashboardProjects />} />
        </Route> */}

      </Routes>

      <Footer></Footer>
      {/* <ToastContainer autoClose={1500} /> */}
      {/* <ReactTooltip /> */}

      {/* </UserStoreProvider> */}
    </div >
  );
}
export default App;
