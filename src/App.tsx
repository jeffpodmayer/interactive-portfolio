import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-500 p-8">
      <h1 className="text-white text-2xl font-bold">Tailwind is working!</h1>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="bg-white text-blue-500 px-4 py-2 rounded mt-4"
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
