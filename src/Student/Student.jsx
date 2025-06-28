import styles from './student.module.css'
import PropTypes from 'prop-types'
function Student(props) {
  return(
    <>
      <div className={styles.student}>
          <p>Name : {props.name}</p>
          <p>Age : {props.age}</p>
          <p>Student : {props.isStudent ? "Yes" : "No"}</p>
      </div>

    </>
  );
}

Student.propType={ //propType is not predefined
  name:PropTypes.string,
  age:PropTypes.number,
  isStudent:PropTypes.bool,

}
Student.defaultProps={  // defaultProps is predefined
  name:"Enter Student Name",
  age:0,
  isStudent:false,
}

export default Student