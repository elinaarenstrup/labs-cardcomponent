import React, { useState } from "react";
import "./app.css";
import { CardOne } from "./components/CardOne.js";
import { CardTwo } from "./components/CardTwo.js";

export const App = () => {
  const [ButtonClicked, setButtonClicked] = useState(false);

  const handleClick = () => {
    setButtonClicked(true);
  };

  return (
    <div className="App">
      <div className="outer-box">
        {!ButtonClicked && (
          <CardOne
            className="card lemon"
            cardTitle="Lemon"
            emoji={"🍋"}
            emojiAlt="lemon"
            subTitle="This is a really tasty fruit."
            onClick={handleClick}
            button="ORDER NOW"
          />
        )}
        {ButtonClicked && (
          <CardTwo
            className="card2 lemon2"
            cardTitle="Lemon"
            emoji={"🍋"}
            emojiAlt="lemon"
          />
        )}
      </div>
    </div>
  );
};
