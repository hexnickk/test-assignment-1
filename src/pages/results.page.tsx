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
    <>
      <h3>Congrats! You completed the quiz.</h3>
      <div>
        You answer {correct}/{length} correctly
      </div>
      <button onClick={onRestart}>Play again</button>
    </>
  );
};
