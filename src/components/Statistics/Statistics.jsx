import {getRandomColor} from '../../helpers/RandomColorFunc'
console.log("current color now", getRandomColor())

const Statistics = (props) => {
    // console.log(props.dataList)
   
return (

<section className="statistics">
    
  {props.title && <h2 className="title">{ props.title }</h2>}

  <ul className="stat-list">
    {props.dataList.map((item) => ( 
        <li
            key={item.id}
            className="item"
            style={{ backgroundColor: getRandomColor() }}> 
      <span className="label">{ item.label }</span>
      <span className="percentage">{ item.percentage }%</span>
     </li>
    ))}
  </ul>
            
</section> 
        
    )
}


export default Statistics;




