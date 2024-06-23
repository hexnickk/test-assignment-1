import { Question } from "../../app";
import { cn } from "../../utils";

export type QuestionViewProps = {
  question?: Question;
  onAnswer?: (question: Question, option: string) => unknown;
};

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
              "p-4 rounded-lg basis-1/3 grow bg-[#393F6E] text-primary from-active-start to-active-end",
              !isAnswered && "hover:bg-gradient-to-r",
              question.givenAnswer === option && "bg-gradient-to-r",
            )}
            onClick={handleAnswer(option)}
            disabled={isAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};
