import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import GithubService from './GithubService';

jest.mock('./GithubService');

describe('App Component', () => {
  it('renders correctly with user data and repo list', async () => {

    const userData = { avatar_url: 'https://example.com/avatar.jpg', login: 'ondermartin' };
    GithubService.prototype.fetchUserData = jest.fn().mockResolvedValue(userData);


    const repoData = [
      { id: 1, name: 'Repo 1', description: 'Description 1', svn_url: 'https://example.com/repo1' },
      { id: 2, name: 'Repo 2', description: 'Description 2', svn_url: 'https://example.com/repo2' }
    ];
    GithubService.prototype.fetchRepoData = jest.fn().mockResolvedValue(repoData);


    render(<App />);


    expect(screen.getByRole('button')).toHaveTextContent('List my public repos!');


    await waitFor(() => {
      expect(screen.getByAltText('ondermartin')).toBeInTheDocument();
    });

    expect(screen.getByText('Repo 1')).toBeInTheDocument();
    expect(screen.getByText('Repo 2')).toBeInTheDocument();
  });


});
