

function Opretionbtn(propes) {
  const { incriment } = propes;

  return (
    <div className="container">
      <div className="d-flex justify-content-center  ">
        <div>
          <button
            className="border border-success"
            onClick={function () {
              incriment(1);
            }}
          >
            update
          </button>

          <button
            className="border border-success ms-5"
            onClick={function () {
              incriment(5);
            }}
          >
            5 update
          </button>
          <button
          // using Arrowfunction
            className="border border-success ms-5"
            onClick={()=>  {
              incriment(-5);
            }}
          >
            -5 update
          </button>
        </div>
      </div>
    </div>
  );
}

export { Opretionbtn };
