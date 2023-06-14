import "./style.css";

export default function App() {
  getData();
  return <div></div>;
}

async function getData() {
  const response = await axios.get("https://localhost:7211/index");
  let data = response;
  console.log(data);
}
