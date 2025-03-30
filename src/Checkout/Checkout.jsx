import "./Checkout.css";
function Checkout({
  addOnPlan,
  selectedPlan: { title, moneyPeriod, datePeriod },
}) {
  // let totalAddOnPrice = 0;
  // addOnPlan.forEach((addOn) => {
  //   totalAddOnPrice += addOn.price;
  // });
  // console.log(totalAddOnPrice);
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
              <a href="#">Change</a>
            </div>
            <p>{moneyPeriod}</p>
          </div>
          <hr />
          {addOnPlan.map((addOn) => (
            <div className="service-price">
              <h4>{addOn.title}</h4>
              <p>{addOn.priceString}</p>
            </div>
          ))}
        </div>
        <div className="total-price">
          <h4>Total (per month)</h4>
          <p>12/mo</p>
        </div>
      </main>
    </>
  );
}
export default Checkout;
