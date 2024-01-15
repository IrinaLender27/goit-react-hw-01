export const TransactionHistory = ({ items: { id, type, amount, currency } }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {items.map(item => (
            <td key={item.id} />
          ))}
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
  );
};
