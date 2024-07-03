import { useEffect, useState } from "react";
import { countriesData } from "./countries";
import { QUIZ_LENGTH } from "./modules/config";
import { ResultsPage } from "./pages/results.page";
import { QuizPage } from "./pages/quiz.page";
import { Loading } from "./shared/loading";
import { shuffle } from "./shared/utils";

type ArrayElement<SubType extends readonly unknown[]> =
  SubType extends readonly (infer ElementType)[] ? ElementType : never;

type ContryData = ArrayElement<typeof countriesData>;

export type Question = {
  question: string;
  options: string[];
  correctAnswer: string;
  givenAnswer: string | undefined;
};

let fetchQuestions = async (): Promise<Question[]> => {
  // mimic loading
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    shuffle(countriesData)
      // group by 4
      .reduce<ContryData[][]>((acc, cur, index) => {
        if (index % 4 === 0) {
          return [...acc, [cur]];
        }
        return [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], cur]];
      }, [])
      // getting first 10 questions
      .slice(0, QUIZ_LENGTH)
      .map((item) => ({
        question: `Which country is ${item[0].countryCapital} the capital?`,
        options: shuffle([
          item[0].countryName,
          item[1].countryName,
          item[2].countryName,
          item[3].countryName,
        ]),
        correctAnswer: item[0].countryName,
        givenAnswer: undefined,
      }))
  );
};

export function App() {
  let [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    (async () => {
      let questions = await fetchQuestions();
      setQuestions(questions);
    })();
  }, []);

  let handleAnswer = (question: Question, option: string) => {
    const newQuestions = questions.map((item) =>
      item === question ? { ...item, givenAnswer: option } : item,
    );
    setQuestions(newQuestions);
  };

  let handleRestart = async () => {
    let questions = await fetchQuestions();
    setQuestions(questions);
  };

  let answeredQuestions = questions.filter(
    (item) => item.givenAnswer != null,
  ).length;

  let isQuizEnded = answeredQuestions === QUIZ_LENGTH;

  let correct = questions.filter(
    (item) => item.givenAnswer === item.correctAnswer,
  ).length;

  return (
    <div className="flex min-h-screen items-center justify-center bg-default bg-cover bg-center text-primary">
      <div className="flex w-[800px] flex-col items-center rounded-xl bg-secondary">
        {/* poor man's router */}
        {(questions.length === 0 && <Loading className="m-10" />) ||
          (isQuizEnded && (
            <ResultsPage
              correct={correct}
              length={answeredQuestions}
              onRestart={handleRestart}
            />
          )) || <QuizPage questions={questions} onAnswer={handleAnswer} />}
      </div>
    </div>
  );
}
