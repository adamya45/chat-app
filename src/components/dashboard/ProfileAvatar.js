import React from 'react';
import { Avatar } from 'rsuite';
import { getNameInitials } from '../../misc/helpers';

const ProfileAvatar = ({ name, ...avatatProps }) => {
  return (
    <Avatar circle {...avatatProps}>
        {getNameInitials(name)}
    </Avatar>
  );
};

export default ProfileAvatar;