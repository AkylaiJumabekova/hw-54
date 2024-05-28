import React from "react";
import Cell from "../Cell/Cell";
import { CellData } from "../../types";

interface GameBoardProps {
  cells: CellData[];
  onCellClick: (index: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ cells, onCellClick }) => {
  return (
    <div className="game-board">
      {cells.map((cell, index) => (
        <Cell key={index} data={cell} onClick={() => onCellClick(index)} />
      ))}
    </div>
  );
};

export default GameBoard;
