function Parssionname(propes) {
  const pnamess = propes.name;
  const pcity = propes.city;

  return (
    <div className="container ">
      <div className=" row ">
        <div className=" col-12 bg-warning d-flex gap-3 flex-wrap ">
          <div className="">
            <h1 className="text-center">{pnamess}</h1>
            <p className="text-center">{pnamess}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Parssionname };
