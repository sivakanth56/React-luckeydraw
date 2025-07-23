import { useState } from "react";
import { Scoure } from "./Scoure";
import { Opretionbtn } from "./Oparetionbtn";

function County(propes) {
  // destructuring

  const { value } = propes;

  let [counte, setcount] = useState(value);

  function incriment(value) {
    
      setcount(counte + value);
      console.log("hi sivakanth")
    
  }

  

  

  /*function decriment() {
    setcount(counte - 1);
  }*/

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Scoure counte={counte} />
        </div>

        <div className="col-12 mt-5">
          <div>
            <Opretionbtn incriment={incriment} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default County;
