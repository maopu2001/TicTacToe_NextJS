import Image from 'next/image';
import { Button } from './ui/button';

export default function WinnerBanner({ winner }) {
  let shadowColor, ringColor, textColor, finalTitle, finalMessaage;
  if (winner === 'circle') {
    shadowColor = 'shadow-red-500/50';
    ringColor = 'ring-red-500/50';
    textColor = 'text-red-500';
    finalTitle = 'Congratulations!';
    finalMessaage = `${winner} wins!`;
  } else if (winner === 'cross') {
    shadowColor = 'shadow-blue-500/50';
    ringColor = 'ring-blue-500/50';
    textColor = 'text-blue-500';
    finalTitle = 'Congratulations!';
    finalMessaage = `${winner} wins!`;
  } else {
    shadowColor = 'shadow-black/50';
    ringColor = 'ring-black/50';
    textColor = 'text-black';
    finalTitle = 'Draw';
    finalMessaage = '';
  }

  return (
    <div
      className={`flex-col gap-2 justify-center items-center rounded-2xl absolute w-4/5 h-1/3 hidden isolate bg-orange-200/90 shadow-lg ring-1 ${shadowColor} ${ringColor}`}
      id="winnerBanner"
    >
      <h1 className={`text-3xl font-bold ${textColor}`}>{finalTitle}</h1>
      <h2 className={`text-2xl font-semibold capitalize ${textColor}`}>{finalMessaage}</h2>
      <Button
        className="bg-amber-700 hover:bg-amber-800 w-10 h-10 p-1 rounded-full"
        onClick={() => window.location.reload()}
      >
        <Image
          className="w-full h-full"
          src="/replay.svg"
          alt="play again"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
}
