export default async function getCardData() {
  const response = await axios.get("https://localhost:7211/index");
  const result = response.data;
  console.log(result);
  return {
    name: result[0].name,
    maxHp: result[0].maxHp,
    currentHp: result[0].currentHp,
    potionCount: result[0].potionCount,
  };
}
