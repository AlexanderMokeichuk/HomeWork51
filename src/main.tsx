import React from "react";
import ReactDOM from "react-dom/client"
import RandomNumber from "./Person/ArrayRandomNumber.ts";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
let arrayNumber = [5, 11, 16, 23, 33];

const buttonEvent = () => {
  arrayNumber = RandomNumber();
  arrayNumber = arrayNumber.sort((n1, n2) => n1 - n2);
  root.render(
    <React.StrictMode>
      <div>
        <div>
          <button onClick={buttonEvent} className="buttonEvent">New numbers</button>
        </div>
        <div className="balls">
          <div className="ball"><h6 className="number">{arrayNumber[0]}</h6></div>
          <div className="ball"><h6 className="number">{arrayNumber[1]}</h6></div>
          <div className="ball"><h6 className="number">{arrayNumber[2]}</h6></div>
          <div className="ball"><h6 className="number">{arrayNumber[3]}</h6></div>
          <div className="ball"><h6 className="number">{arrayNumber[4]}</h6></div>
        </div>
      </div>
    </React.StrictMode>,
  );
};

const container = (
  <div>
    <div>
      <button onClick={buttonEvent} className="buttonEvent">New numbers</button>
    </div>
    <div className="balls">
      <div className="ball"><h6 className="number">{arrayNumber[0]}</h6></div>
      <div className="ball"><h6 className="number">{arrayNumber[1]}</h6></div>
      <div className="ball"><h6 className="number">{arrayNumber[2]}</h6></div>
      <div className="ball"><h6 className="number">{arrayNumber[3]}</h6></div>
      <div className="ball">< h6 className="number">{arrayNumber[4]}</h6></div>
    </div>
  </div>
);

root.render(
  <React.StrictMode>
    {container}
  </React.StrictMode>,
);

