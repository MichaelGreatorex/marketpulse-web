import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../../features/Dashboard/DashboardPage';

const AppRouter: React.FC = () => (
    <Routes>
        <Route path="/" element={<DashboardPage />} />
    </Routes>
);

export default AppRouter;