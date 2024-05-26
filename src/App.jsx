import "./App.css";
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="w-screen h-screen bg-[#f9f0ff] relative">
      <img
        src="/images/background-pattern-desktop.svg"
        alt="background-image"
        className="w-full"
      />

      <div className="bg-white rounded-2xl center">
        <Accordion />
      </div>
    </div>
  );
}

export default App;
