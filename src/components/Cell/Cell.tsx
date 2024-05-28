import React from "react";
import { CellData } from '../../types';

interface CellProps {
  data: CellData;
  onClick: () => void;
}

const Cell: React.FC<CellProps> = ({ data, onClick }) => {
  const className = `cell ${data.clicked ? (data.hasItem ? "item" : "empty") : ""}`;

  return (
    <div className={className} onClick={onClick}>
      {}
      {data.clicked && data.hasItem && <span>🎯</span>}
      {data.clicked && !data.hasItem && <span>❌</span>}
    </div>
  );
};

export default Cell;
