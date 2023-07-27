import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 30px 0;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
`;

export const Description = styled.div`
    text-align: center;
    padding: 20px 0;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const Avatar = styled.img`
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const Name = styled.p`
    font-size: 18px;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
`;

export const Tag = styled.p`
    font-size: 14px;
    color: #a0a0a0;
    margin-bottom: 10px;
`;

export const Location = styled.p`
    font-size: 14px;
    color: #a0a0a0;  
`;

export const Stats = styled.ul`
    background-color: #e1eeff;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 12px;
    gap: 60px;
    margin: 0;
    border: 1px solid #ccc;
    box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08), 0px 1px 1px 0px rgba(46, 47, 66, 0.16), 0px 1px 6px 0px rgba(46, 47, 66, 0.08);
`;

export const StatsDescr = styled.li`
    display: flex;
    flex-direction: column;
}
`;

export const Label = styled.span`
    font-size: 14px;
    color: #555;
    margin-bottom: 8px;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: bold;
`;