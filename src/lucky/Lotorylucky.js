import { Aboute } from "./Aboute";
import { Header } from "./heder";
import { Parssionname } from "./Paerssionnmes";

import "./Lotory.css";
import { useState } from "react";

import Confetti from "react-confetti";

function Luckydraw() {
  const people = [
    { name: "Ravi Teja", city: "Hyderabad" },
    { name: "Anusha Reddy", city: "Warangal" },
    { name: "Sai Kumar", city: "Vijayawada" },
    { name: "Divya Latha", city: "Visakhapatnam" },
    { name: "Suresh Babu", city: "Nellore" },
    { name: "Priya Rao", city: "Guntur" },
    { name: "Harsha Vardhan", city: "Khammam" },
    { name: "Sneha Rani", city: "Karimnagar" },
    { name: "Vamsi Krishna", city: "Rajahmundry" },
    { name: "Deepthi N", city: "Kurnool" },
    { name: "Naveen Yadav", city: "Tirupati" },
    { name: "Lakshmi Priya", city: "Adilabad" },
    { name: "Rajesh Naik", city: "Mahbubnagar" },
    { name: "Sandhya Rani", city: "Nizamabad" },
    { name: "Manoj Kumar", city: "Anantapur" },
    { name: "Kavitha Reddy", city: "Srikakulam" },
    { name: "Kiran Goud", city: "Miryalaguda" },
    { name: "Bhavana Reddy", city: "Kadapa" },
    { name: "Rakesh Varma", city: "Eluru" },
    { name: "Mounika", city: "Ongole" },
    { name: "Chaitanya", city: "Karimnagar" },
    { name: "Swapna", city: "Nalgonda" },
    { name: "Ajay Kumar", city: "Machilipatnam" },
    { name: "Tejaswi", city: "Medak" },
    { name: "Venkat", city: "Hanamkonda" },
    { name: "Sindhu", city: "Bhimavaram" },
    { name: "Rohit", city: "Kakinada" },
    { name: "Lavanya", city: "Tenali" },
    { name: "Srikanth", city: "Amaravati" },
    { name: "Jyothi", city: "Proddatur" },
    { name: "Tarun", city: "Zaheerabad" },
    { name: "Nikhil", city: "Tadepalligudem" },
    { name: "Sravani", city: "Chittoor" },
    { name: "Mahesh", city: "Jagityal" },
    { name: "Sathvika", city: "Palakollu" },
  ];

  //let Random = Math.floor(Math.random() * people.length);
  //console.log("hi sivakanth");

  let [value, setvalue] = useState();

  let [isloding, setisloading] = useState(false);
  let [selibration, setselibration] = useState(false);

  function PickAnumber() {
    setisloading(true);
    let Random = Math.floor(Math.random() * people.length);
    //console.log(people[Random]);

    const parsion = people[Random];

    let Luckyparsion = `${parsion.name} From ${parsion.city}`;
    
    //setselibration(true);

    //setvalue(Luckyparsion);

    setTimeout(() => {
      setvalue(Luckyparsion);

      console.log("hi saraswathi");
      setisloading(false);
      setselibration(true);
    }, 5000);
  }

  return (
    <div className="container ">

       {selibration && <Confetti />}
      <div>
        <Header />
      </div>

      <div>
        <Aboute />
      </div>
      <div className="container   ">
        <diV className="row      ">
          <div className=" col  d-flex flex-row flex-wrap gap-3    d-grid gap-5  ">
            {people.map(function (userData) {
              return <Parssionname name={userData.name} city={userData.city} />;
            })}

            {/*<Parssionname name="sivakanth" city="hyderabad"/>
        <Parssionname name="saraswathi" city="pamaru"/>
              d-flex flex-wrap 
        <Parssionname name="sagar" city="gudlavaller"/>*/}
          </div>
          <div className="mt-5">
           
            {isloding && <h2>Loading....</h2>}
          </div>
          <div className=" d-flex justify-content-cente d-flex ">
            <h2>{value} </h2>
          </div>
          <div className="d-flex justify-content-center mt-5 mb-5 ">
            <button className=" btn btn-danger " onClick={PickAnumber}>
              Pick Luckydraw
            </button>
          </div>
        </diV>
      </div>
    </div>
  );
}

export { Luckydraw };
