import React from 'react';

import {
  Avatar,
  Link,
} from '@material-ui/core';

interface PropTypes {
  username: string;
}

const GithubAvatar: React.FC<PropTypes> = ({ username }) => {
  if (username === 'anonymous') return <Avatar/>;

  const githubUrl = `https://github.com/${username}`;
  const avatarUrl = githubUrl + '.png';
  const usernameTokens = username.split(/[ ,.\-_#@;]/g);
  const altText = (
    (usernameTokens.length > 1)?
      (usernameTokens[0][0] + usernameTokens[1][0])
    :
      usernameTokens[0][0]
  ).toUpperCase()

  return (
    <Link href={githubUrl}>
      <Avatar>
        <img src={avatarUrl} alt={altText} />
      </Avatar>
    </Link>
  )
};

export default GithubAvatar;

