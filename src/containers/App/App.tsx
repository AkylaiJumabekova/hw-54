import React, { useState } from "react";
import GameBoard from "../../components/GameBoard/GameBoard";
import AttemptsCounter from "../../components/AttemptsCounter/AttemptsCounter";
import ResetButton from "../../components/ResetButton/ResetButton";
import "./App.css";

const createItems = () => {
  const items = Array.from({ length: 36 }, () => ({
    hasItem: false,
    clicked: false,
  }));
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;
  return items;
};

const App = () => {
  const [items, setItems] = useState(createItems());
  const [attempts, setAttempts] = useState(0);

  const handleCellClick = (index: number) => {
    if (items[index].clicked) return; // Убрал проверку gameOver

    setItems((prevItems) => {
      const newItems = [...prevItems];
      newItems[index] = { ...newItems[index], clicked: true };
      return newItems;
    });

    setAttempts((prevAttempts) => prevAttempts + 1);

    if (items[index].hasItem) {
      alert("Item found!"); // Сообщение об отыскании кольца, игра продолжается
    }
  };

  // Сброс игры
  const handleReset = () => {
    setItems(createItems());
    setAttempts(0);
  };

  return (
    <div className="App">
      <GameBoard cells={items} onCellClick={handleCellClick} />
      <AttemptsCounter count={attempts} />
      <ResetButton onReset={handleReset} />
    </div>
  );
};

export default App;
