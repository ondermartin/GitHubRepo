interface GithubRepo {
  id: number;
  name: string;
  description: string;
  svn_url: string;
  // Add more properties as needed
}

class GithubService {
  async fetchUserData(username: string): Promise<{ avatar_url: string; login: string }> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  }

  async fetchRepoData(username: string): Promise<GithubRepo[]> {
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      if (!response.ok) {
        throw new Error('Failed to fetch repository data');
      }
      const result = await response.json();
      return result.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        svn_url: repo.svn_url

      }));
    } catch (error) {
      console.error('Error fetching repository data:', error);
      throw error;
    }
  }
}

export default GithubService;
