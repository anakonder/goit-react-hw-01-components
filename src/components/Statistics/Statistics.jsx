import styles from './Statistics.module.css'
import { getRandomColor } from '../../helpers/RandomColorFunc'
import PropTypes from "prop-types";
console.log("current color now", getRandomColor())

const Statistics = (props) => {
    // console.log(props.dataList)
   
return (

<section className={styles.statistics}>
    
  {props.title && <h2 className={styles.title}>{ props.title }</h2>}

  <ul className={styles.statList}>
    {props.stats.map((item) => ( 
        <li
            key={item.id}
            className={styles.item}
            style={{ backgroundColor: getRandomColor() }}> 
      <span className={styles.label}>{ item.label }</span>
      <span className={styles.percentage}>{ item.percentage }%</span>
     </li>
    ))}
  </ul>
            
</section> 
        
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired
}

export default Statistics;




