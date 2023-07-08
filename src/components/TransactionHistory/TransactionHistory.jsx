import PropTypes from "prop-types";
import styles from './TransactionHistory.module.css'
const TransactionHistory = ({items}) => {
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
       { items.map((item, index) => 
           
           <tr className={index % 2 !== 0 ? styles.rowBlue : styles.rowWhite} key={item.id}>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string

    })
  ).isRequired
}

export default TransactionHistory