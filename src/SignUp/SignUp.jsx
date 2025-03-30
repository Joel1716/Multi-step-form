import "./SignUp.css";
function SignUp() {
  return (
    <>
      <h1>Personal info</h1>
      <p className="section-text">
        Please provide your name,email addresss and phone number
      </p>
      <div className="input-label-container">
        <div className="input-label">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="e.g.Ohikhena Joel" />
        </div>
        <div className="input-label">
          <label htmlFor="name">Email Address</label>
          <input type="email" placeholder="e.g.joelOhikhena12@gmail.com" />
        </div>
        <div className="input-label">
          <label htmlFor="name">Phone Number</label>
          <input type="text" placeholder="e.g.08135503380" />
        </div>
      </div>
    </>
  );
}
export default SignUp;
