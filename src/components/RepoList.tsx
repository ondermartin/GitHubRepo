// Example: RepoList.tsx
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GithubContext } from '../context/GithubContext';

const RepoList: React.FC = () => {
  const { repos, fetchRepos } = useContext(GithubContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchRepos();
      setLoading(false);
    };

    fetchData();
  }, [fetchRepos]);

  return (
    <div>
      <h2>Repositories</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos && repos.map((repo) => (
            <li key={repo.id}>
              <Link to={`/repos/${repo.name}`}>{repo.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
