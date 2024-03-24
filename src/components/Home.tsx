import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>GitHub Repo Viewer</h1>
      <Link to="/repos">View Repositories</Link>
    </div>
  );
};

export default Home;
