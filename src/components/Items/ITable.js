import React from "react";
import "./Items.css";
import { useEffect, useState } from "react";

const Camera = [
  {
    name: "RTG7xh",
    description: "asdfsdf",
    price: 1000,
  },
  {
    name: "RTG7xh",
    description: "asdfsdf",
    price: 1000,
  },
  {
    name: "RTG7xh",
    description: "asdfsdf",
    price: 1000,
  },
  {
    name: "RTG7xh",
    description: "asdfsdf",
    price: 1000,
  },
];

function ITable() {
  // const [Items_info, setItems_info] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/Item")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setItems_info(data);
  //     });
  // }, []);

  return (
    <>
      <div className="Items__Information__Table">
        {Camera.map((item) => (
          <React.Fragment>
            <div className="pic">
              <img
                className="camera"
                src="./camera.jpg"
                alt="logo"
                width="100px"
              />
            </div>
            <div className="text">
              <p>{item.name}</p>
              <p>{item.description}</p>
              <div className="price__1">
                <p>E.G.P {item.price}</p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default ITable;
