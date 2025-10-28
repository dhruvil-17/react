import { useRef } from "react";
function FocusInput() {
  const inputRef = React.useRef();
  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
}

export default FocusInput