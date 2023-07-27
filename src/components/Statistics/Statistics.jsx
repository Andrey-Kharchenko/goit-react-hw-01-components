import { StatisticsCard, Title, StatList, Item, Label, Percentage } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <StatisticsCard>
        {title && <Title>{title}</Title>}
        <StatList>
            {stats.map(({ id, label, percentage }) => {
            return <Item key={id}>
                <Label>{label}</Label>
                <Percentage>{percentage}%</Percentage>
            </Item>;
            })}
        </StatList>
        </StatisticsCard>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
};

