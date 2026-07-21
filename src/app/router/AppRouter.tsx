import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import DashboardPage from '../../pages/Dashboard/DashboardPage';
import MarketsPage from '../../pages/Markets/MarketsPage';
import AnalyticsPage from '../../pages/Analytics/AnalyticsPage';
import PortfolioPage from '../../pages/Portfolio/PortfolioPage';
import AboutPage from '../../pages/About/AboutPage';

const AppRouter: React.FC = () => (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutPage />} />
        </Route>
    </Routes>
);

export default AppRouter;