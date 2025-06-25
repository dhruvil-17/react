import PropTypes from 'prop-types'
function Lists(props) {


      const list=props.type;
      const category=props.category;

       const listItems=list.map(fruit=> 
                <li key={fruit.id}>
                  {fruit.name} : <b>{fruit.calories}</b>
                </li>);
  return(<>

    <h1>{category}</h1>
    <ol>{listItems}</ol>
  
    </>);
}

Lists.defaultProps={
  category : "Category",
  type: [],
}
Lists.proptype={
  category:PropTypes.string,
  items:PropTypes.arrayOf(PropTypes.shape({
                                          id:PropTypes.number,
                                          name:PropTypes.string,
                                          calories:PropTypes.number,
                                        }))
}


export default Lists