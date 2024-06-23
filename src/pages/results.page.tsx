const congratsIcon = new URL("/assets/congrats.svg", import.meta.url);

export type ResultsPageProps = {
  correct?: number;
  length?: number;
  onRestart?: () => unknown;
};

export const ResultsPage = ({
  correct,
  length,
  onRestart,
}: ResultsPageProps) => {
  return (
    <div className="mb-6 flex h-full w-full flex-col items-center gap-4 p-5">
      <img className="w-full" src={congratsIcon.toString()} alt="congrats" />
      <h1 className="text-3xl">Congrats! You completed the quiz.</h1>
      <div className="mb-6">
        You answer {correct}/{length} correctly
      </div>
      <button
        className="min-w-[250px] rounded-lg bg-[#393F6E] bg-gradient-to-r from-active-start to-active-end p-4 font-semibold"
        onClick={onRestart}
      >
        Play again
      </button>
    </div>
  );
};
