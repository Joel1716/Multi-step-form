import "./Checkout.css";
function Checkout({
  addOnPlan,
  selectedPlan: { title, moneyPeriod, datePeriod, money },
  clicked,
  setNum,
}) {
  let price = 0;
  addOnPlan.forEach((eachPrice) => {
    price += eachPrice.price;
  });
  return (
    <>
      <h1>Finishing up</h1>
      <p className="section-text">
        Double-check everything looks OK before confirming
      </p>
      <main>
        <div className="each-section-pricing">
          <div className="plan-chosen-price">
            <div className="plan-chosen">
              <h3>
                {title} ({datePeriod})
              </h3>
              <a href="#" onClick={() => setNum(0)}>
                Change
              </a>
            </div>
            <p>{moneyPeriod}</p>
          </div>
          <hr />
          {addOnPlan.map((addOn) => (
            <div key={addOn.title} className="service-price">
              <h4>{addOn.title}</h4>
              <p>{addOn.priceString}</p>
            </div>
          ))}
        </div>
        <div className="total-price">
          <h4>Total {clicked ? "(per year)" : "(per month)"}</h4>
          <p>{clicked ? `$${money + price}/yr` : `$${money + price}/mo`}</p>
        </div>
      </main>
    </>
  );
}
export default Checkout;
