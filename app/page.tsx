"use client"

import Card from "./elements.jsx";  // This is the "Card" tag that I created to simplify the addition of glass texture information cards.
import { useEffect } from "react";  // useEffect runs whenever the webpage loads, and when this runs can differ based on a multitude of factors but for this project, it runs on load.

let connection = new WebSocket("ws://localhost:8765"); // WebSocket connection to my Python Server

export default function Home() {
  useEffect(() => {
    connection.addEventListener("message", (event) => {
      document.getElementById("dataPoint1AText")!.textContent = `${event.data}`  // Altering the DOM textContent to write the 1 or 0.
    });
  }, []);

  // These two functions simply send the LED toggle message through the WebSocket connection.
  function sendLedOn() {
    connection.send("LEDOn;")
  }
  function sendLedOff() {
    connection.send("LEDOff;")
  }

  return (
    <main>
      <div className="background">
        <img src="/garden.jpeg"></img>
      </div>
      <header>
        <div className="logoSet">
          <h1>Cereal Net</h1>
        </div>
        <div className="set">
          <span className="material-symbols-outlined">hub</span>
          <p>Connected</p>
        </div>
        <div className="set">
          <span className="material-symbols-outlined">public</span>
          <p>Publicly Visible</p>
        </div>
      </header>
      <div className="headerSpacer"></div>
      <div className="cardSet">
        <Card content={
          <div>
            <div className="rowIconText">
              <span className="material-symbols-outlined">monitoring</span>
              <h1>Data Point 1A</h1>
            </div>
            <p>Custom data connection.</p>
            <h1 id="dataPoint1AText"></h1>  {/* this is where the 1 or 0 is displayed */}
          </div>
        } type={"smallRight"}></Card>
        <Card content={
          <div>
            <div className="rowIconText">
              <span className="material-symbols-outlined">monitoring</span>
              <h1>Data Communications 1A</h1>
            </div>
            <p>Custom data communications.</p>
            <div className="buttonDiv">
              <button onClick={sendLedOn}>Turn Lights ON</button> {/* these are the two On/Off Buttons. */}
              <button onClick={sendLedOff}>Turn Lights OFF</button>
            </div>
          </div>
        } type={"smallRight"}></Card>
      </div>
    </main>
  );
}
