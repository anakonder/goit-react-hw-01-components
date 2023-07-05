import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'
const TransactionHistory = (props) => {
  return (
    <table className={ styles.transactionHistory }>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
            </thead>
            <tbody>
       { props.items.map((item) => 
           
           <tr key={item.id}>
               <td className={styles.firstColum}>{ item.type }</td>
                <td>{ item.amount }</td>
                <td>{ item.currency }</td>
            </tr>
           
            )}
            </tbody>
            
            </table>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired
}

export default TransactionHistory