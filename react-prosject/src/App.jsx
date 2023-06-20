import Card from "./components/Card.jsx";
import "./style.css";

export default function App() {
  return (
    <div>
      <Card></Card>
    </div>
  );
}

async function getData() {
  const response = await axios.get("https://localhost:7211/index");
  const stuff = response.data;
  console.log(stuff);
}
