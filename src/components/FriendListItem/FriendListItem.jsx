import { Item, Status, Avatar, Name } from './FriendListItem.styled';
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Item>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </Item>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
