import styles from './Button.module.css'


function Button() {

  let count=0;
  const handleClick = (name)=> {
        if (count<3) {
          count++;
          console.log(`${name} clicked me ${count} times`)
        }
        else{
          console.log(`${name} stop clicking me`);  
        }
  };

  


  // const HandleClick = (e) => {
  //     e.target.style.backgroundColor="blue"
  //     e.target.style.color="white"
  //     e.target.style.border="none"
  //     e.target.style.borderRadius="50%"
  // }
  
  
  return(
    <>
      <button className={styles.btn} onClick={()=> handleClick("Dhruvil")}>Click me</button>
    </>
  );
}
export default Button

