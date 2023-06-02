import style from "../style/word.module.css";
const Word = ({ word }) => {

  return (
    <div className={style.word}>
      {word.map((letter, i) => (
        <span
          key={i}
          className={`${style.letter} ${(letter.type === "exist"
            ? style["letter-exist"]
            : (letter.type === "correct" ? style["letter-correct"] : ""))}`}
        >
            {letter.letter}
        </span>
      ))}
    </div>
  );
};
export default Word;
