import { useEffect, useState } from "react";
import "./SignUp.css";
function SignUp({
  setError,
  error,
  names,
  email,
  number,
  setNames,
  setEmail,
  setNumber,
}) {
  const handleNameChange = (e) => {
    setNames(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  useEffect(() => {
    if (names === "") {
      setError({ nameError: "Please enter your name" });
    } else if (!email.includes("@") || !email.includes(".com")) {
      setError({ emailError: "Please enter the correct email format" });
    } else if (number.length >= 0) {
      if (number.length !== 11) {
        setError({ numberError: "Please give the correct number" });
      } else {
        setError("No error");
      }
    } else {
      setError("No error");
    }
  }, [names, email, number]);
  return (
    <>
      <h1>Personal info</h1>
      <p className="section-text">
        Please provide your name,email addresss and phone number
      </p>
      <div className="input-label-container">
        <div className="input-label">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="e.g.Ohikhena Joel"
            value={names}
            onChange={(e) => handleNameChange(e)}
          />
          {error.nameError && <p className="error">{error.nameError}</p>}
        </div>
        <div className="input-label">
          <label htmlFor="name">Email Address</label>
          <input
            className="hey"
            type="email"
            placeholder="e.g.joelOhikhena12@gmail.com"
            value={email}
            onChange={(e) => handleEmailChange(e)}
          />
          {error.emailError && <p className="error">{error.emailError}</p>}
        </div>
        <div className="input-label">
          <label htmlFor="name">Phone Number</label>
          <input
            type="text"
            placeholder="e.g.08135503380"
            value={number}
            onChange={(e) => handleNumberChange(e)}
          />
          {error.numberError && <p className="error">{error.numberError}</p>}
        </div>
      </div>
    </>
  );
}
export default SignUp;
