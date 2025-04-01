import arcadeImg from "../assets/images/icon-arcade.svg";
import advancedImg from "../assets/images/icon-advanced.svg";
import proImg from "../assets/images/icon-pro.svg";
import "../Plan/Plan.css";
import { use, useEffect, useState } from "react";

function PlanOptions({
  title,
  img,
  moneyPeriod,
  datePeriod,
  setSelectedPlan,
  selectedPlan,
  money,
}) {
  const handlePlanClick = () => {
    setSelectedPlan({
      title: title,
      moneyPeriod: moneyPeriod,
      datePeriod: datePeriod,
      money: money,
    });
  };
  useEffect(() => {
    if (selectedPlan.title === title) {
      handlePlanClick();
    }
  }, [moneyPeriod]);

  return (
    <div
      className="plans"
      onClick={handlePlanClick}
      style={
        selectedPlan.title === title
          ? {
              backgroundColor: "hsl(231, 100%, 99%)",
              border: "1px solid hsl(231, 100%, 90%)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p className="money-period">{moneyPeriod}</p>
      <p className="time-period">2 months free</p>
    </div>
  );
}

function Plan({ setSelectedPlan, selectedPlan, setClicked, clicked }) {
  const planOptions = [
    {
      img: arcadeImg,
      title: "Arcade",
      month: "Monthly",
      year: "Yearly",
      monthlyPeriod: 9,
      yearlyPeriod: 90,
    },
    {
      img: advancedImg,
      title: "Advanced",
      month: "Monthly",
      year: "Yearly",
      monthlyPeriod: 12,
      yearlyPeriod: 120,
    },
    {
      img: proImg,
      title: "Pro",
      month: "Monthly",
      year: "Yearly",
      monthlyPeriod: 15,
      yearlyPeriod: 150,
    },
  ];
  useEffect(() => {
    document.querySelector("input").addEventListener("change", function () {
      if (this.checked) {
        setClicked(true);
      } else {
        setClicked(false);
      }
    });
  }, []);
  useEffect(() => {
    document.querySelectorAll(".time-period").forEach((time) => {
      if (clicked) {
        time.style.display = "block";
      } else {
        time.style.display = "none";
      }
    });
    if (clicked) {
      document.querySelector(".slider-ball").classList.add("right-slide");
    } else {
      document.querySelector(".slider-ball").classList.remove("right-slide");
    }
    document.querySelector("input").checked = clicked;
  }, [clicked]);
  return (
    <>
      <h1>Select your plan</h1>
      <p className="section-text">
        You have the option of monthly or yearly biling
      </p>
      <div className="plan-container">
        {planOptions.map((option) => (
          <PlanOptions
            key={option.title}
            img={option.img}
            title={option.title}
            moneyPeriod={
              clicked
                ? `$${option.yearlyPeriod}/yr`
                : `$${option.monthlyPeriod}/mo`
            }
            money={clicked ? option.yearlyPeriod : option.monthlyPeriod}
            datePeriod={clicked ? option.year : option.month}
            setSelectedPlan={setSelectedPlan}
            selectedPlan={selectedPlan}
          />
        ))}
      </div>
      <div className="plan-time-period">
        <p>Monthly</p>
        <label className="toggle-switch">
          <input type="checkbox" />
          <span className="slider">
            <div className="slider-ball"></div>
          </span>
        </label>
        <p>Yearly</p>
      </div>
    </>
  );
}
export default Plan;
