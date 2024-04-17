import Image from "next/image";
import styles from "./page.module.css";
import Card from "./elements.jsx";

export default function Home() {
  return (
    <main>
      <div className="background">
        <img src="/garden.jpeg"></img>
      </div>
      <header>
        <div className="logoSet">
          <h1>HOTDOG Network</h1>
          <p>The IOT network that just works.</p>
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
            <h1></h1>
          </div>
        } type={"smallRight"}></Card>
        <Card content={
          <div>
            <div className="rowIconText">
              <span className="material-symbols-outlined">hub</span>
              <h1>Connected!</h1>
            </div>
            <p>You're connected to your hub using a local server connected to a total of 1 device.</p>
            <p>These devices are shown on this console, or should appear on this console soon.</p>
            <div className="rowIconText">
              <span className="material-symbols-outlined">warning</span>
              <span className="material-symbols-outlined">public</span>
              <h1>Publicly Viewable</h1>
            </div>
            <p>Your console is publicly viewable and can be controlled by anyone. If you want to restrict access, go to Settings {">"} Security {">"} Restrict Access</p>
          </div>
        } type={"smallRight"}></Card>
        <Card content={
          <div>
            <h1></h1>
          </div>
        } type={"smallRight"}></Card>
      </div>
    </main>
  );
}
