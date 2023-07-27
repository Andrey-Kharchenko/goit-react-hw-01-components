import data from 'data/friends.json';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendListEl } from './FriendList.styled';

export const FriendList = () => {
    return (
        <FriendListEl>
            { data.map(({ avatar, name, isOnline, id }) => {
                return <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />;
            })}
        </FriendListEl>
    )
};