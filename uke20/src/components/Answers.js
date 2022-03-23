export default function Answers({
  answer,
  updateAnswer,
  checkedAnswer,
  isWrong,
}) {
  const isChecked = () => checkedAnswer._key === answer.key

  return (
    <div>
      <label htmlFor={answer._key}>
        <input
          id={answer.title}
          type="radio"
          name="answer"
          value={answer.title}
          onChange={() => updateAnswer(answer)}
          checked={isChecked}
        />
        {answer.title}
        {isChecked() && isWrong ? (
          <span className="text-red">Wrong Answer</span>
        ) : null}
      </label>
    </div>
  )
}
