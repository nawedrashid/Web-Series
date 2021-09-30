import React, { useState } from "react";
import "./styles.css";

const WSDB = {
  Comedy: [
    {
      name: "The Office",
      rating: "8.9"
    },
    {
      name: "Friends",
      rating: "8.8"
    },
    {
      name: "VICTORiOUS",
      rating: "7"
    }
  ],
  Fantasy: [
    {
      name: "Game Of Thrones",
      rating: "9.2"
    },
    {
      name: "Lucifer",
      rating: "8.1"
    },
    {
      name: "The Witcher",
      rating: "8.2"
    }
  ],
  Scientifiic: [
    {
      name: "The Mandalorian",
      rating: "8.8"
    },
    {
      name: "Star-Trek: Discovery",
      rating: "7.2"
    },
    {
      name: "The Handmaid's Tale",
      rating: "8.4"
    }
  ],
  Action: [
    {
      name: "Arrow",
      rating: "7.5"
    },
    {
      name: "The Boys",
      rating: "8.7"
    },
    {
      name: "Daredevil",
      rating: "8.6"
    }
  ]
};
var series = Object.keys(WSDB);
export default function App() {
  const [Genre, setGenre] = useState("Comedy");
  function clickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Series Selector</h1>
      <div className="container box">
        <p>
          Check out my Web Series collection. You can choose the series you like
          to watch.
        </p>
        <div>
          {series.map((genre) => (
            <button className="btn" onClick={() => clickHandler(genre)}>
              {genre}
            </button>
          ))}
        </div>
      </div>
      <div className="option box">
        <ul>
          {WSDB[Genre].map((shows) => (
            <li key={shows.name}>
              {" "}
              <div className="name">{shows.name}</div>
              <div className="rating">{shows.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
