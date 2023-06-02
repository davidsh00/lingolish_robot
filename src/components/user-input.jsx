import { useEffect, useRef } from "react";
import style from "../style/user-input.module.css";
const UserInput = ({ onSubmit, length,enable }) => {
  const inputRef = useRef();
  function changeHandle() {
    const EnterdInput = inputRef.current.value.trim();
    if (EnterdInput.length >= length) {
      onSubmit(EnterdInput);
      inputRef.current.value=''
    }
  }
  useEffect(()=>{
    inputRef.current.focus()
  },[enable])
  return (
    <div className={style['form-input']}>
      <input
      disabled={!enable}
        type="text"
        placeholder="Enter your word"
        ref={inputRef}
        onChange={changeHandle}
        maxLength={length || 10}
      />
    </div>
  );
};
export default UserInput;
