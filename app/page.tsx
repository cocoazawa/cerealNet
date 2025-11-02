"use client"

import Card from "./elements.jsx";
import { useEffect, useState } from "react";

let connection: WebSocket;

export default function Home() {
    let [colorOfActive, setColorOfActive] = useState("red");

    useEffect(() => {
        connection = new WebSocket("ws://localhost:8765");
        connection.addEventListener("open", (event) => {
            setColorOfActive("green");
            document.getElementById("dataComms1Text")!.textContent = `Active`;
        });
        connection.addEventListener("close", (event) => {
            setColorOfActive("red")
            document.getElementById("dataComms1Text")!.textContent = `Not Active`
        });
        connection.addEventListener("message", (event) => {
            console.log(event.data);
        });
    }, []);

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
                    <>
                        <span className="material-symbols-outlined">terminal</span>
                        <h1>Data Communications 1</h1>
                        <p>Your latest message</p>
                    </>
                }></Card>
            </div>
        </main>
    );
}
