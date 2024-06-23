import { useState } from "react";
import { Question } from "../app";
import { cn } from "../utils";
import { QuestionView, QuestionViewProps } from "../modules/step/question-view";
import { QUIZ_LENGTH } from "../modules/config";

type QuizPageProps = {
  questions?: Question[];
  onAnswer?: QuestionViewProps["onAnswer"];
};

export const QuizPage = ({ questions, onAnswer }: QuizPageProps) => {
  let [questionId, setQuestionId] = useState<number>(0);

  let handleTabClick = (questionId: number) => () => {
    setQuestionId(questionId);
  };

  return (
    <div className="pt-5 flex flex-col items-center gap-5">
      <h3 className="text-[#8B8EAB]">Country Quiz</h3>
      <div className="flex gap-2">
        {Array(QUIZ_LENGTH)
          .fill(undefined)
          .map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-10 w-10 rounded-full from-active-start to-active-end text-white",
                (index === questionId ||
                  questions[index]?.givenAnswer != null) &&
                  "bg-gradient-to-r",
              )}
              onClick={handleTabClick(index)}
            >
              {index + 1}
            </button>
          ))}
      </div>
      <QuestionView question={questions[questionId]} onAnswer={onAnswer} />
    </div>
  );
};
