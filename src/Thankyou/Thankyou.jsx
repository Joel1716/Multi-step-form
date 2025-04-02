import thanksImg from "../assets/images/icon-thank-you.svg";
const Thankyou = () => {
  return (
    <div className="thankyou">
      <img src={thanksImg} alt="Red Checkmark and rounded red background" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};
export default Thankyou;
