import { Question } from "../../app";
import { cn } from "../../utils";

export type QuestionViewProps = {
  question?: Question;
  onAnswer?: (question: Question, option: string) => unknown;
};

const checkIcon = new URL('/assets/Check_round_fill.svg', import.meta.url);
const closeIcon = new URL('/assets/Close_round_fill.svg', import.meta.url);

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
      <h1 className="text-primary">{question.question}</h1>
      <div className="flex w-full flex-wrap gap-5">
        {question.options.map((option) => (
          <button
            key={option}
            className={cn(
              "flex items-center justify-center gap-2 p-4 rounded-lg basis-1/3 grow bg-[#393F6E] text-primary from-active-start to-active-end",
              !isAnswered && "hover:bg-gradient-to-r",
              question.givenAnswer === option && "bg-gradient-to-r",
            )}
            onClick={handleAnswer(option)}
            disabled={isAnswered}
          >
            {option}
            {isAnswered && option === question.correctAnswer && <img src={checkIcon.toString()} alt="correct" />}
            {isAnswered && option === question.givenAnswer && option !== question.correctAnswer && <img src={closeIcon.toString()} alt="incorrect" />}
          </button>
        ))}
      </div>
    </>
  );
};
