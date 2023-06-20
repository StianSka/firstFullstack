import Card from "./components/Card.jsx";
import "./style.css";

export default function App() {
  async function getCardData() {
    const response = await axios.get("https://localhost:7211/index");
    const stuff = response.data;
    console.log(stuff);
  }

  getCardData();
  return (
    <div className="main-container">
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

async function getData() {
  const response = await axios.get("https://localhost:7211/index");
  const stuff = response.data;
  console.log(stuff);
}
