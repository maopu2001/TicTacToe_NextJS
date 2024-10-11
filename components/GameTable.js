'use client';
import { useEffect, useState } from 'react';
import Circle from '@/public/circle.svg';
import Cross from '@/public/cross.svg';
import Image from 'next/image';

function GameTable({ sign, setWinner }) {
  const [gameTable, setGameTable] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [currentSign, setCurrentSign] = useState('circle');

  useEffect(() => {
    setCurrentSign(sign);
  }, [sign]);

  const updateCell = (e) => {
    const value = e.target.getAttribute('value');
    const row = parseInt(value.charAt(0));
    const col = parseInt(value.charAt(1));
    const newGameTable = [...gameTable];
    newGameTable[row][col] = currentSign;
    setGameTable(newGameTable);
    checkWinner(newGameTable);
    setCurrentSign((s) => (s === 'cross' ? 'circle' : 'cross'));
  };

  const checkWinner = (newGameTable) => {
    const winSequence = [
      ['00', '01', '02'],
      ['10', '11', '12'],
      ['20', '21', '22'],
      ['00', '10', '20'],
      ['01', '11', '21'],
      ['02', '12', '22'],
      ['00', '11', '22'],
      ['02', '11', '20'],
    ];

    //wins
    for (const sequence of winSequence) {
      const [a, b, c] = sequence;
      if (
        newGameTable[a[0]][a[1]] === currentSign &&
        newGameTable[b[0]][b[1]] === currentSign &&
        newGameTable[c[0]][c[1]] === currentSign
      ) {
        showBanner(currentSign);
        return;
      }
    }

    //draws
    if (!newGameTable.some((row) => row.some((element) => element === ''))) {
      showBanner('draw');
      return;
    }
  };

  const showBanner = (currentSign) => {
    setWinner(currentSign);
    document.getElementById('winnerBanner').style.display = 'flex';
    document.getElementById('gameTableContainer').style.pointerEvents = 'none';
  };

  return (
    <div id="gameTableContainer" className="hidden relative">
      <div className="gameTable flex flex-col">
        {gameTable.map((row, r) => (
          <div key={r} className="flex">
            {row.map((cell, c) => (
              <div
                className="flex justify-center items-center bg-orange-300 w-24 h-24 m-1 rounded-2xl"
                key={c}
                value={r.toString() + c.toString()}
                onClick={(e) => updateCell(e)}
              >
                {cell !== '' ? (
                  <Image
                    className="w-[80%] h-[80%]"
                    src={
                      cell === 'cross' ? Cross : cell === 'circle' ? Circle : ''
                    }
                    alt={cell}
                  />
                ) : (
                  ''
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameTable;
