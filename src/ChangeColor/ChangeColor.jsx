import React , {useState} from 'react';
import styles from './color.module.css'
function ChangeColor(params) {
  
  const [color , setColor]=useState("#FFFFFF")

  const HandleChange = (e)=>{
      setColor(e.target.value)
  }
  
  return(<>
  <div className={styles.MainDiv} style={styles}>
      <h1>Color Changer Tool</h1>
      <div style={{backgroundColor : color}} className={styles.ColorDiv}>
        <h3>Selected Color : {color}</h3>
      </div>
      <label className={styles.Label}>Select Color : <input type="color" value={color} onChange={HandleChange}/></label>
  </div>
  </>)
}

export default ChangeColor