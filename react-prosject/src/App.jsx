import { useState } from "react";
import Card from "./components/Card.jsx";
import getCardData from "./requests/Requests.jsx";
import "./style.css";

export default function App() {
  return (
    <div className="main-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}
