import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function CreateEditProfile() {

  // set local storage with user id & email
  //localStorage.setItem("id", data.user_id);
  //localStorage.setItem("email", data.email);

  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData:", formData);

    const options = {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await fetch(`/profiles/save`, options);
    const data = await res.json();

    console.log("Data from Server", data);

		if (data !== "") {
      // redirect
      navigate("/SingleProfileV");
    } 

  };
  return (
    <div>
      <Header />
      <div className="form-container">
        <form className="create-profile-form" onSubmit={handleSubmit}>
          <h2 className="form-header">Create | Edit </h2>
          <div>
            <label className="form-label" htmlFor="email">
              Email:<span>*</span>{" "}
            </label>
            <input
              className="form-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="fullName">
              Full Name:<span>*</span>{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="id">
              ID:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="about">
              About:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="about"
              value={formData.about || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor="linkedIn">
              LinkedIn:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="linkedIn"
              value={formData.linkedIn || ""}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="twitter">
              Twitter:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="twitter"
              value={formData.twitter || ""}
              onChange={handleChange}
              required
            />
            <label className="form-label" htmlFor="cohort">
              CC Cohort:{" "}
            </label>
            <input
              className="form-input"
              type="text"
              name="cohort"
              value={formData.cohort || ""}
              onChange={handleChange}
              required
            />
            <input className="btn profile-btn" type="submit" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateEditProfile;
