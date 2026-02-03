import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 h-full flex flex-col justify-end">
      <h1 className="text-[28px] font-bold mb-2">Welcome to PopX</h1>
      <p className="text-lg text-text2/60 font-medium mb-6">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
      </p>
      <button className="btn-primary bg-btn text-text mb-3" onClick={() => navigate("/signup")}>
        Create Account
      </button>
      <button
        className="btn-primary bg-btn2 text-text2"
        onClick={() => navigate("/login")}
      >
        Already Registered? Login
      </button>
    </div>
  );
};

export default Landing;
