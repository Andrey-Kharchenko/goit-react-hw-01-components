import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
    width: 400px;
    padding: 10px 0;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
`;


export const StatList = styled.ul`
    display: flex;
    text-align: center;
    justify-content: center;
    gap: 40px;
`;


export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const Label = styled.span`
    font-size: 18px;
    color: #555;
    margin-bottom: 8px;
`;


export const Percentage = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: #333;
`;