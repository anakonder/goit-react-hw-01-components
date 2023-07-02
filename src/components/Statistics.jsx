const Statistics = (props) => {
    // console.log(props.dataList)
    function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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




