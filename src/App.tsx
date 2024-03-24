import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App: React.FC = () => {
  const repoName = process.env.MY_REACT_PROJECT; // Access the environment variable

  // Use repoName in your component
  console.log(`Repository Name: ${repoName}`);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
