import { Question } from "../../app";
import { cn } from "../../utils";

export type QuestionViewProps = {
  question?: Question;
  onAnswer?: (question: Question, option: string) => unknown;
};

const checkIcon = new URL("/assets/Check_round_fill.svg", import.meta.url);
const closeIcon = new URL("/assets/Close_round_fill.svg", import.meta.url);

export const QuestionView = ({ question, onAnswer }: QuestionViewProps) => {
  if (question == null) {
    return <></>;
  }

  const handleAnswer = (option: string) => () => {
    onAnswer?.(question, option);
  };

  let isAnswered = question.givenAnswer != null;

  return (
    <>
      <span className="text-xl font-bold">{question.question}</span>
      <div className="flex w-full flex-wrap gap-5">
        {question.options.map((option) => (
          <button
            key={option}
            className={cn(
              "flex grow basis-1/3 items-center justify-center gap-2 rounded-lg bg-[#393F6E] from-active-start to-active-end p-4 font-semibold",
              !isAnswered && "hover:bg-gradient-to-r",
              question.givenAnswer === option && "bg-gradient-to-r",
            )}
            onClick={handleAnswer(option)}
            disabled={isAnswered}
          >
            {option}
            {isAnswered && option === question.correctAnswer && (
              <img src={checkIcon.toString()} alt="correct" />
            )}
            {isAnswered &&
              option === question.givenAnswer &&
              option !== question.correctAnswer && (
                <img src={closeIcon.toString()} alt="incorrect" />
              )}
          </button>
        ))}
      </div>
    </>
  );
};
