'use client'

import { useEffect, useState } from 'react';
import UserAccount from './user';

export default function GitHubProfileFinder() {
  const [username, setUsername] = useState('thiagotcarvalho');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGitHubUserData();
  }

  async function fetchGitHubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername('');
    }
  }

  useEffect(() => {
    fetchGitHubUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <h1>Loading data. Please wait...</h1>
  }

  return (
    <div className="github-profile-container">
      <div className="github-input-wrapper">
        <input
          name="github-username"
          type="text"
          placeholder="Enter GitHub username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <UserAccount user={userData} /> : null}
    </div>
  )
}