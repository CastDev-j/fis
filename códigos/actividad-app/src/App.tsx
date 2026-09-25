import { useState } from "react";
import "./App.css";

const CANDIES = ["Fresa", "Piña", "Limón", "Lima"] as const;
type Candy = (typeof CANDIES)[number];

function App() {
  const [candy, setCandy] = useState<Candy | null>(null);

  const insertCoin = () => {
    const index = Math.floor(Math.random() * CANDIES.length);
    setCandy(CANDIES[index]);
  };

  return (
    <div className="container">
      <main className="dispenser">
        <div className="candy-display">
          {candy ? (
            <div className="candy-result">
              <span className="candy-name">{candy}</span>
            </div>
          ) : (
            <span className="placeholder">—</span>
          )}
        </div>

        <button onClick={insertCoin} className="coin-button">
          Insertar Moneda
        </button>
      </main>
    </div>
  );
}

export default App;
