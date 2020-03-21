import React from 'react';

import {
  Avatar,
  Link,
} from '@material-ui/core';

interface PropTypes {
  username: string;
}

const githubUrl = 'https://github.com/';
const getUserGithubUrl = (username: string): string => githubUrl + username;

const GithubAvatar: React.FC<PropTypes> = ({ username }) => {
  if (username === 'anonymous') return <Avatar/>;

  const userGithubUrl = getUserGithubUrl(username);
  const avatarUrl = userGithubUrl + '.png';
  const usernameTokens = username.split(/[ ,.\-_#@;]/g);
  const altText = (
    (usernameTokens.length > 1)?
      (usernameTokens[0][0] + usernameTokens[1][0])
    :
      usernameTokens[0][0]
  ).toUpperCase()

  return (
    <Link href={userGithubUrl}>
      <Avatar>
        <img src={avatarUrl} alt={altText} />
      </Avatar>
    </Link>
  )
};

export { getUserGithubUrl };
export default GithubAvatar;

