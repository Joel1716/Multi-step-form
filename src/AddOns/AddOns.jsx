import { use, useEffect, useState } from "react";
import "./AddOns.css";
function AddOnsOption({
  title,
  message,
  price,
  priceString,
  setAddOnPlan,
  addOnPlan,
}) {
  function handleAddOns(e) {
    if (e.target.checked) {
      setAddOnPlan((a) => [
        ...a,
        {
          title,
          priceString,
          price,
          clicked: title,
        },
      ]);
      console.log("yes");
    } else {
      setAddOnPlan(addOnPlan.filter((item) => item.title !== title));
      console.log("Hey");
    }
  }
  return (
    <div
      className="add-ons"
      style={
        addOnPlan.some((addOn) => addOn.clicked === title)
          ? {
              backgroundColor: "hsl(231, 100%, 99%)",
            }
          : { backgroundColor: "transparent" }
      }
    >
      <input
        className="addOn-input"
        type="checkbox"
        checked={addOnPlan.some((addOn) => addOn.clicked === title)}
        onChange={(e) => handleAddOns(e)}
      />
      <div className="add-ons-text-price">
        <div className="add-ons-text">
          <h3>{title}</h3>
          <p>{message}</p>
        </div>
        <p>{priceString}</p>
      </div>
    </div>
  );
}
function AddOns({ addOnPlan, setAddOnPlan, clicked }) {
  const addOnsOptions = [
    {
      title: "Online Service",
      message: "Access to multiplayer games",
      monthPrice: 1,
      yearPrice: 10,
    },
    {
      title: "Largers Storage",
      message: "Extra 1TB of cloud save",
      monthPrice: 2,
      yearPrice: 20,
    },
    {
      title: "Customizable Profile",
      message: "Custom theme on your profile",
      monthPrice: 2,
      yearPrice: 20,
    },
  ];
  useEffect(() => {
    setAddOnPlan((prevAddOns) =>
      prevAddOns.map((addOn) => {
        // Find the matching option to get the updated prices
        const option = addOnsOptions.find((opt) => opt.title === addOn.title);

        if (option) {
          return {
            ...addOn,
            price: clicked ? option.yearPrice : option.monthPrice,
            priceString: clicked
              ? `+$${option.yearPrice}/yr`
              : `+$${option.monthPrice}/mo`,
          };
        }
        return addOn;
      })
    );
  }, [clicked]);
  return (
    <>
      <h1>Pick add-ons</h1>
      <p className="section-text">
        Add-ons help enhance your gaming experience
      </p>
      {addOnsOptions.map((addOns) => (
        <AddOnsOption
          key={addOns.title}
          title={addOns.title}
          message={addOns.message}
          price={clicked ? addOns.yearPrice : addOns.monthPrice}
          priceString={
            clicked ? `+$${addOns.yearPrice}/yr` : `+$${addOns.monthPrice}/mo`
          }
          setAddOnPlan={setAddOnPlan}
          addOnPlan={addOnPlan}
        />
      ))}
    </>
  );
}
export default AddOns;
