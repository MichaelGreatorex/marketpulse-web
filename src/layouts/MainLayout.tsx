import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';

const MainLayout: React.FC = () => (
    <>
        <Header />

    <div>
        <Sidebar />

        <Outlet />
    </div>

        <Footer />
    </>
);

export default MainLayout;