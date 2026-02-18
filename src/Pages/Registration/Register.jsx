import React, { useState } from "react";
import "./Register.css"; // Import the CSS file

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    branch: "",
    year: "",
    college: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (name === "phoneNumber" && type === "text") {
      const numericValue = value.replace(/\D/g, "");
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? e.target.checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    // console.log(formData);
    e.preventDefault();
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setFormData({
            name: "",
            phoneNumber: "",
            email: "",
            branch: "",
            year: "",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Registration Failed!");
      });
  };

  return (
    <div className="registration-container overflow-hidden">
      <h1 className="registration-heading">Registration Form</h1>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-88 lg:w-full"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <div className="phone-input">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              pattern="[0-9]{10}"
              maxLength="10"
              required
              className="w-88 lg:w-full"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Id:</label>
          <input
            type="email"
            id="email"
            name="email"
            pattern="[a-zA-Z0-9._%+-]+@gmail.com"
            value={formData.email}
            onChange={handleChange}
            placeholder="test123@gmail.com"
            className="w-88 lg:w-full"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="branch">Branch:</label>
          <input
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
            className="w-88 lg:w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="w-88 lg:w-full"
          >
            <option value="">Select Year</option>
            <option value="1st">1st Year</option>
            <option value="2nd">2nd Year</option>
            <option value="3rd">3rd Year</option>
            <option value="4th">4th Year</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="branch">College</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="w-88 lg:w-full"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
