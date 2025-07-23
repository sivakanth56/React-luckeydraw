import { Luckydraw } from "./lucky/Lotorylucky";
import { Mumbers } from "./Members";
import County from "./Numbercount/County";

function App() {
  return (
    <div>
      <Mumbers />
      <County value={0} />
      <County value={5} />
      
      hi
    </div>
  );
}

export default App;
