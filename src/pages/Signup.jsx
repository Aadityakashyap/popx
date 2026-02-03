import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "Marry Doe",
    phone: "9876543210",
    email: "marry@gmail.com",
    password: "",
    company: "PopX",
    agency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    localStorage.setItem("popx_user", JSON.stringify(form));
    navigate("/account");
  };

  return (
    <div className="p-6 h-full flex flex-col justify-between">
      <span>
        <h2 className="text-[28px] font-bold mb-6">
          Create your <br /> PopX account
        </h2>
        {[
          { label: "Full Name", name: "name" },
          { label: "Phone Number", name: "phone" },
          { label: "Email Address", name: "email" },
          { label: "Password", name: "password", type: "password" },
          { label: "Company Name", name: "company" },
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
        <p className="text-[13px] font-medium mb-2">
          Are you an Agency? <span className="text-error">*</span>
        </p>
        <div className="flex gap-6 mb-8">
          {["yes", "no"].map((val) => (
            <label key={val} className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="agency"
                value={val}
                checked={form.agency === val}
                onChange={handleChange}
                className="accent-btn w-4 h-4"
              />
              {val.charAt(0).toUpperCase() + val.slice(1)}
            </label>
          ))}
        </div>
      </span>
      <button className="btn-primary bg-btn text-text" onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
};

export default Signup;
