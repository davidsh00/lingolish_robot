import { forwardRef, useImperativeHandle, useRef } from "react";
import Word from "./word";
import style from "../style/word-list.module.css";
import React from "react";
const WordList = forwardRef(({ list }, ref) => {
  useImperativeHandle(ref, () => ({
    scrollDown,
  }));
  const listRef = useRef();
  function scrollDown() {
    listRef.current.scroll({
      top: listRef.current.scrollHeight - listRef.current.clientHeight,
      behavior: "smooth",
    });
  }
  return (
    <ul className={style.list} ref={listRef}>
      {list &&
        list.length > 0 &&
        list.map((word, i) => (
          <li key={i}>
            <Word word={word} />
          </li>
        ))}
    </ul>
  );
});
export default WordList;
