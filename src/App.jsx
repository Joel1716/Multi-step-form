import "./App.css";
import React, { useEffect, useState } from "react";
import SignUp from "./SignUp/SignUp.jsx";
import Plan from "./Plan/Plan.jsx";
import AddOns from "./AddOns/AddOns.jsx";
import Checkout from "./Checkout/Checkout.jsx";

function App() {
  const [num, setNum] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState({});
  const [clicked, setClicked] = useState(false);
  const [addOnPlan, setAddOnPlan] = useState([]);
  function handleNextSection() {
    if (num === num + 1) {
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
      return <SignUp />;
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
      return <Checkout addOnPlan={addOnPlan} selectedPlan={selectedPlan} />;
    } else {
      return;
    }
  }
  return (
    <div className="container">
      <div className="steps-container">
        <div className="number-and-step">
          <div className="number">1</div>
          <div className="steps">
            <p>STEP 1</p>
            <h2>YOUR INFO</h2>
          </div>
        </div>
        <div className="number-and-step">
          <div className="number">2</div>
          <div className="steps">
            <p>STEP 2</p>
            <h2>SELECT PLAN</h2>
          </div>
        </div>
        <div className="number-and-step">
          <div className="number">3</div>
          <div className="steps">
            <p>STEP 3</p>
            <h2>ADD-ONS</h2>
          </div>
        </div>
        <div className="number-and-step">
          <div className="number">4</div>
          <div className="steps">
            <p>STEP 4</p>
            <h2>SUMMARY</h2>
          </div>
        </div>
      </div>
      <div className="second-section">
        {sections()}
        <div className="switch-section">
          <a href="#" onClick={handlePreviousSection}>
            Go Back
          </a>
          <button id={num} onClick={handleNextSection}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
