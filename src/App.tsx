import React, { useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


const App: React.FC = () => {
  const [avatarURL, setAvatarURL] = useState<string | undefined>();
  const [githubUsername, setGitHubUsername] = useState<string | undefined>();
  const [repoData, setRepoData] = useState<JSX.Element[] | undefined>();

  async function repoDataURL() {
    try {
      const response = await fetch("https://api.github.com/users/ondermartin/repos");
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        const list = result.map((item: any) => (
          <div className="text-center" key={item.id}>
            <a target="_blank" rel="noopener" href="{item.svn_url}">

              {item.name}
            </a>
          </div>
        ));
        setRepoData(list);
      } else {
        console.error("Error fetching repo data:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch("https://api.github.com/users/ondermartin");
        if (response.ok) {
          const result = await response.json();
          console.log(result);
          setAvatarURL(result.avatar_url);
          setGitHubUsername(result.login);
        } else {
          console.error("Error fetching user data:", response.statusText);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    }
    fetchUserData();
  }, []);

  return (
    <BrowserRouter>
      <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={avatarURL} />
          <Card.Body>
            <Card.Title>{githubUsername}</Card.Title>
            <Button variant="primary" onClick={repoDataURL}>
              List my public repos!
            </Button>
          </Card.Body>
        </Card>
        {repoData}
      </div>
    </BrowserRouter>
  );
};

export default App;
