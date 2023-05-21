import "./Login.css";

const Login = () => {
  return (
    <div className="global-container">
      <div className="closing-window"></div>
      <div className="login-container">
        <h1 className="title">Welcome</h1>
        <p className="subtitle">Please enter your email address</p>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="email-address"
        />
        <button type="button" className="login-btn">Continue</button>
      </div>
    </div>
  );
};

export default Login;
