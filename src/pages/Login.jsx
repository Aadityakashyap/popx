import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "marry@gmail.com",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const storedUser = JSON.parse(localStorage.getItem("popx_user"));

    if (!storedUser) {
      alert("No account found. Please sign up first.");
      return;
    }

    const isValid =
      storedUser.email === form.email && storedUser.password === form.password;

    if (!isValid) {
      alert("Invalid email or password");
      return;
    }

    navigate("/account");
  };

  return (
    <div className="p-6">
      <h2 className="text-[28px] font-bold mb-2">
        Signin to your <br /> PopX account
      </h2>
      <p className="text-lg text-text2/60 mb-6">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
      </p>
      {[
        { label: "Email Address", name: "email" },
        { label: "Password", name: "password", type: "password" },
      ].map(({ label, name, type }) => (
        <div key={label} className="relative mb-4">
          <input
            name={name}
            type={type || "text"}
            placeholder={label}
            className="input peer"
            value={form[name]}
            onChange={handleChange}
          />
          <label className="absolute left-3 -top-2 text-[13px] text-btn px-1 pointer-events-none transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-placeholder peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-[13px] peer-focus:text-btn peer bg-bg">
            {label} <span className="text-error">*</span>
          </label>
        </div>
      ))}
      <button
        className={`btn-primary text-text ${!form.email ? "btn-disabled" : "bg-btn"}`}
        onClick={handleSubmit}
        disabled={!form.email}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
