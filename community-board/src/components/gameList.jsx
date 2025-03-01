import React from "react";
import GameCard from "./sportCards";
import Sports from "./sports";

const GameList = () => {
    const games = JSON.parse(Sports);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center",
       }}>
        {games.map((game) => (
          <GameCard 
            key={game.id} 
            team={game.team} 
            date={game.date} 
            time={game.time} 
            venue={game.venue} 
            img={game.img} 
          />
        ))}
      </div>
    );
  };
  
  export default GameList;