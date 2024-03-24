import React, { useContext } from 'react';
import { GithubContext } from '../context/GithubContext';
import { useParams } from 'react-router-dom';

const RepoDetail: React.FC = () => {
  const { repos } = useContext(GithubContext);
  const { repoName } = useParams<{ repoName: string }>();

  const repo = repos.find((r) => r.name === repoName);

  if (!repo) {
    return <div>Repository not found.</div>;
  }

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
    </div>
  );
};

export default RepoDetail;
