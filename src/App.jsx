import "./App.css";
import React, { useEffect, useState } from "react";
import SignUp from "./SignUp/SignUp.jsx";
import Plan from "./Plan/Plan.jsx";
import AddOns from "./AddOns/AddOns.jsx";
import Checkout from "./Checkout/Checkout.jsx";
import Thankyou from "./Thankyou/Thankyou.jsx";

function App() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [num, setNum] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [clicked, setClicked] = useState(false);
  const [addOnPlan, setAddOnPlan] = useState([]);

  function handleNextSection() {
    if (error !== "No error") {
    } else if (num === 1 && selectedPlan.title === undefined) {
      alert("Please Pick an Option");
    } else if (num === 2 && addOnPlan.length === 0) {
      alert("Please Pick an AddOn");
    } else if (num === 4) {
      return;
    } else {
      setNum((n) => n + 1);
    }
  }
  function handlePreviousSection() {
    if (num === 0) {
      return;
    } else {
      setNum((n) => n - 1);
    }
  }
  function sections() {
    if (num === 0) {
      return (
        <SignUp
          names={names}
          email={email}
          number={number}
          error={error}
          setError={setError}
          setNames={setNames}
          setEmail={setEmail}
          setNumber={setNumber}
        />
      );
    } else if (num === 1) {
      return (
        <Plan
          setSelectedPlan={setSelectedPlan}
          selectedPlan={selectedPlan}
          clicked={clicked}
          setClicked={setClicked}
        />
      );
    } else if (num === 2) {
      return (
        <AddOns
          setAddOnPlan={setAddOnPlan}
          addOnPlan={addOnPlan}
          clicked={clicked}
        />
      );
    } else if (num === 3) {
      return (
        <Checkout
          addOnPlan={addOnPlan}
          selectedPlan={selectedPlan}
          clicked={clicked}
          setNum={setNum}
        />
      );
    } else if (num === 4) {
      return <Thankyou />;
    }
  }
  return (
    <div className="overall-container">
      <div className="container">
        <div className="steps-container">
          <div className="number-and-step">
            <div
              className="number"
              style={
                num === 0
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "transparent" }
              }
            >
              1
            </div>
            <div className="steps">
              <p>STEP 1</p>
              <h2>YOUR INFO</h2>
            </div>
          </div>
          <div className="number-and-step">
            <div
              className="number"
              style={
                num === 1
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "transparent" }
              }
            >
              2
            </div>
            <div className="steps">
              <p>STEP 2</p>
              <h2>SELECT PLAN</h2>
            </div>
          </div>
          <div className="number-and-step">
            <div
              className="number"
              style={
                num === 2
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "transparent" }
              }
            >
              3
            </div>
            <div className="steps">
              <p>STEP 3</p>
              <h2>ADD-ONS</h2>
            </div>
          </div>
          <div className="number-and-step">
            <div
              className="number"
              style={
                num === 3 || num === 4
                  ? { backgroundColor: "lightgreen" }
                  : { backgroundColor: "transparent" }
              }
            >
              4
            </div>
            <div className="steps">
              <p>STEP 4</p>
              <h2>SUMMARY</h2>
            </div>
          </div>
        </div>
        <div className="second-section">{sections()}</div>
        {num !== 4 && (
          <div className="switch-section">
            <a href="#" onClick={handlePreviousSection}>
              Go Back
            </a>
            <button id={num} onClick={handleNextSection}>
              Next Step
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
