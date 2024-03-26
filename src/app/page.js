import Accordian from './accordian/page';
import RandomColor from './random-color/page';

export default function Home() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* Random Color Component */}
      <RandomColor />
    </div>
  );
}
