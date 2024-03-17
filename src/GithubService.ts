// Example: GithubService.ts
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchRepositories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/your-username/repos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching repositories:', error);
    return [];
  }
};
