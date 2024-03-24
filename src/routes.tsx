import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const RepoList = lazy(() => import('./components/RepoList'));
const RepoDetail = lazy(() => import('./components/RepoDetail'));

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos" element={<RepoList />} />
      <Route path="/repos/:repoName" element={<RepoDetail />} />
    </Routes>
  );
};

export default AppRoutes;
