import { Container, Tabel, Thead, Th, Tr, Td } from './TransactionHistory.styled';
import data from 'data/transactions.json'
import PropTypes from 'prop-types';

export function TransactionHistory() {
    return (
        <Container>
            <Tabel>
                <Thead>
                    <Tr>
                    <Th>Type</Th>
                    <Th>Amount</Th>
                    <Th>Currency</Th>
                    </Tr>
                </Thead>

                <tbody>
                    {data.map(({id, type, amount, currency}) => {
                        return <Tr key={id}>
                            <Td>{type}</Td>
                            <Td>{amount}</Td>
                            <Td>{currency}</Td>
                        </Tr>
                    })}
                </tbody>
            </Tabel>
        </Container>
    );
};

TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string,
};
