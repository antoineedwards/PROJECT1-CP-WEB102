import React from "react";

const GameCard = ({ team, date, time, venue, img }) => {
  return (
    <div style={{
      border: "1px solid #ccc", padding: "20px", borderRadius: "10px", width: "250px", textAlign: "center",
      backgroundColor: "rgb(255, 255, 255)",
    }}>
      <img
        src={img} // Placeholder image path, replace with actual image path
        alt={team}
        style={{
          width: "100%", borderRadius: "10px", height: "150px", objectFit: "cover",
        }}
      />
      <h3>{team}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Venue:</strong> {venue}</p>
      <a 
      target= "_blank" href= "https://fcmontgomery.com/"
      >
        <button style={{
          padding: "10px", backgroundColor: "rgb(0, 0, 0)", color: "white", border: "none", borderRadius: "5px", cursor: "pointer",
        }}>
          Buy Tickets
        </button>
      </a>
    </div>
  );
};

export default GameCard;
