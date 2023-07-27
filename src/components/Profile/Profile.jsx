import { Container, Description, Avatar, Name, Tag, Location, Stats, StatsDescr, Label, Quantity } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => { 
    return (
        <Container>
            <Description>
                <Avatar
                    src={avatar}
                    alt="User avatar"
                />
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Description>

            <Stats>
                <StatsDescr>
                    <Label>{stats.followers}</Label>
                    <Quantity>1000</Quantity>
                </StatsDescr>
                <StatsDescr>
                    <Label>{stats.views}</Label>
                    <Quantity>2000</Quantity>
                </StatsDescr>
                <StatsDescr>
                    <Label>{stats.likes}</Label>
                    <Quantity>3000</Quantity>
                </StatsDescr>
            </Stats>
        </Container >
    );
}; 

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}



    

