const TransactionHistory = (props) => {
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
       { props.items.map((item) => 
           
           <tr>
               <td className="first-colum">{ item.type }</td>
                <td>{ item.amount }</td>
                <td>{ item.currency }</td>
            </tr>
           
            )}
            </tbody>
            
            </table>
    )
}

export default TransactionHistory