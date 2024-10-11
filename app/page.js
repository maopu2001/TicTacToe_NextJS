'use client';
import ChooseSign from '@/components/ChooseSign';
import GameTable from '@/components/GameTable';
import WinnerBanner from '@/components/WinnerBanner';
import { useState } from 'react';

export default function Home() {
  const [sign, setSign] = useState('circle');
  const [winner, setWinner] = useState('');
  return (
    <div className="relative bg-orange-100 w-2/5 min-w-[350px] h-4/5 min-h-[600px] flex flex-col gap-2 justify-center items-center rounded-2xl">
      <h1 className="absolute top-10 text-4xl font-bold">Tic Tac Toe</h1>
      <ChooseSign setSign={setSign} />
      <GameTable sign={sign} setWinner={setWinner} />
      <WinnerBanner winner={winner} />
    </div>
  );
}
