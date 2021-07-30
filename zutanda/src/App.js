import useStore from "./GlobelState";
import Togeele from "./Togeele";
function App() {
  const count = useStore((state) => state.count);
  const inNum = useStore((state) => state.inNum);
  const setInNum = useStore((state) => state.setInNum);
  const increseCount = useStore((state) => state.increseCount);
  const decreseCount = useStore((state) => state.decreseCount);

  return (
    <div className="App">
      <Togeele />
      <div style={{ zIndex: -1 }}>
        <h1>
          hi: {count}, the inNum = {inNum} <br />
          <button onClick={increseCount}>Increse</button>
          <br />
          <button onClick={decreseCount}>Decrese</button>
          <br />
          <input type="number" onChange={(e) => setInNum(e.target.value)} />
          <br />
        </h1>
      </div>
    </div>
  );
}

export default App;
