'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

function ChooseSign({ setSign }) {
  const handleStartGame = () => {
    document.getElementById('container').style.display = 'none';
    document.getElementById('gameTableContainer').style.display = 'block';
  };

  return (
    <div
      className="flex flex-col items-center gap-2 bg-orange-200 p-4 rounded-2xl"
      id="container"
    >
      <h2 className="font-semibold text-xl uppercase">Choose your Marker:</h2>
      <RadioGroup
        className="flex gap-5 justify-center items-center"
        defaultValue="circle"
      >
        <RadioGroupItem
          className="border-red-700 focus:bg-red-200 text-red-700 cursor-pointer"
          value="circle"
          id="circle"
          onClick={(e) => setSign(e.target.value)}
        />
        <Label
          className="-ms-4 text-md text-red-700 cursor-pointer"
          htmlFor="circle"
          value="circle"
          onClick={(e) => setSign(e.target.value)}
        >
          Circle
        </Label>

        <RadioGroupItem
          className="border-blue-700 focus:bg-blue-200 text-blue-700 cursor-pointer"
          value="cross"
          id="cross"
          onClick={(e) => setSign(e.target.value)}
        />
        <Label
          className="-ms-4 text-md text-blue-700 cursor-pointer"
          htmlFor="cross"
          value="cross"
          onClick={(e) => setSign(e.target.value)}
        >
          Cross
        </Label>
      </RadioGroup>
      <Button className="w-full bg-amber-700" onClick={handleStartGame}>
        Start Game
      </Button>
    </div>
  );
}

export default ChooseSign;
