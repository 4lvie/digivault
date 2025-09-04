import Button from "./ux/Button";

function Home() {
  const text = "Mi botom"
  return (
    <div>
      <h2>Home</h2>
      <Button content={text} />
    </div>
  );
}

export default Home;