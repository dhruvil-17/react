import { useEffect , useState } from "react";

function UseEffect() {
  const [count ,setCount] = useState(0);

  useEffect(()=>{
    setTimeout(() => {
      setCount(count+1)
    }, 1000);
  })

  return(<>
    <h1>Counter : {count}</h1>
  </>)
}

export default UseEffect