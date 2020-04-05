import React from "react";
import "./cardtwo.css";

export const CardTwo = ({ className, cardTitle, emoji, emojiAlt }) => {
  return (
    <article className={className}>
      <div className="title2">
        <h2>{cardTitle}</h2>
      </div>
      <div className="emoji2">
        <span alt={emojiAlt}>{emoji}</span>
      </div>
    </article>
  );
};
