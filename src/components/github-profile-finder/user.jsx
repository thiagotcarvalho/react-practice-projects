import Image from "next/image";

export default function UserAccount({ user }) {
  const { avatar_url, followers, following, public_repos, url, name, login, created_at } = user;
  const createdDate = new Date(created_at);

  return (
    <div className="github-profile-user">
      <div className="github-avatar-wrapper">
        <img src={avatar_url} className="github-profile-avatar" alt="user" />
      </div>
      <div className="github-name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString('en-us', {
          month: 'short'
        })} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className="github-profile-info">
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  )
}