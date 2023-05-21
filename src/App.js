import React from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Shared/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Pages/Home/Home/Home.js';
import Footer from './components/Shared/Footer/Footer.js';
import Login from './components/Pages/Login/Login.js';
import Register from './components/Pages/Register/Register.js';
import { ToastContainer } from 'react-toastify';

// admin
import MainAdmin from './AdminDashboard/MainAdmin/MainAdmin';
import DashboardHome from './AdminDashboard/DashboardHome/DashboardHome';
import AiSalesBot from './AdminDashboard/Products/AiSalesBot';
import ChatPage from './components/Pages/ChatPage/ChatPage';
import { CompanyStore } from './stateManagement/CompanyStore';
import AuthContextProvider from './stateManagement/AuthContext';

function App() {

  return (
    <div className='transition-all duration-500 bg-[#F3F3F3] dark:bg-[#0b1120]'>
      <AuthContextProvider />
      <CompanyStore>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:id" element={<ChatPage />} />
          <Route path="/register" element={<Register />} />

          <Route path="/user-dashboard" element={<MainAdmin />}>
            <Route index element={<DashboardHome />}></Route>
            <Route path="aiSalesBot" element={<AiSalesBot />}></Route>
          </Route>

        </Routes>

        <Footer></Footer>
        <ToastContainer autoClose={1500} />
        {/* <ReactTooltip /> */}

      </CompanyStore>
      <AuthContextProvider />


    </div >
  );
}
export default App;
