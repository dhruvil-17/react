import styles from './style.module.css'
import propTypes from 'prop-types'
function Greetings(props) {
  
  const welcomeMsg=<h1 className={styles.welcome}>Welcome {props.username}</h1>;

  const Fail=<h1 className={styles.fail} >Login to continue</h1>;

  return(props.isLoggedIn? welcomeMsg : Fail);
  
}
Greetings.props={
  isLoggedIn : propTypes.bool,
  username : propTypes.string,
}
Greetings.defaultProps={
  isLoggedIn : false,
  username:"guest"
}
export default Greetings