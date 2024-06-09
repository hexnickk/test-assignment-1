import { countriesData } from "./countries";

type ArrayElement<SubType extends readonly unknown[]> =
  SubType extends readonly (infer ElementType)[] ? ElementType : never;

type ContryData = ArrayElement<typeof countriesData>;

const shuffle = <T extends unknown>(array: T[]): T[] =>
  array
    .map((value) => ({ value, _sort: Math.random() }))
    .sort((a, b) => a._sort - b._sort)
    .map(({ value }) => value);

export function App() {
  let questions = shuffle(countriesData)
    // group by 4
    .reduce<ContryData[][]>((acc, cur, index) => {
      if (index % 4 === 0) {
        return [...acc, [cur]];
      }
      return [...acc.slice(0, acc.length - 1), [...acc[acc.length - 1], cur]];
    }, [])
    // getting first 10 questions
    .slice(0, 10)
    .map((item) => ({
      question: `Which country is ${item[0].countryCapital} the capital?`,
      options: shuffle([
        item[0].countryName,
        item[1].countryName,
        item[2].countryName,
        item[3].countryName,
      ]),
      correctAswer: item[0].countryName,
      givenAnswer: undefined,
    }));

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-[600px] w-[600px] bg-green-500 flex flex-col items-center p-5 gap-5">
        <h3>Country Quiz</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-full bg-blue-500">1</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">2</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">3</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">4</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">5</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">6</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">7</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">8</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">9</button>
          <button className="px-3 py-1 rounded-full bg-blue-500">10</button>
        </div>
        <h1>Which country blah blah blah</h1>
        <div className="flex flex-wrap gap-2">
          <button className="p-2 basis-1/3 grow bg-red-500">Sweden</button>
          <button className="p-2 basis-1/3 grow bg-red-500">Malaysa</button>
          <button className="p-2 basis-1/3 grow bg-red-500">Vietnam</button>
          <button className="p-2 basis-1/3 grow bg-red-500">Austria</button>
        </div>
      </div>
    </div>
  );
}
