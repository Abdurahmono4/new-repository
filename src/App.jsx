import { useSelector } from "react-redux";

function App() {
  const { counter } = useSelector((store) => store);
  console.log(counter);
  return (
    <div>
      <h1>Readux</h1>
      <h2>{counter}</h2>
    </div>
  );
}

export default App;
