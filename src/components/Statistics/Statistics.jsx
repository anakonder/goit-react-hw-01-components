import styles from './Statistics.module.css'
import { getRandomColor } from '../../helpers/RandomColorFunc'
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


export default Statistics;




