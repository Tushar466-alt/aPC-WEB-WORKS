import React, { useEffect, useState } from "react";
import Input from "../../Utilities/Input";
import Button from "../../Utilities/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [logInMode, setLogInMode] = useState(true);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0,0);
  })

  const [formData, setFormData] = useState({
    username: "",
    contact: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const reset = () => {
    setFormData({
      username: "",
      contact: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "password" || name === "confirmPassword") {
      setPasswordMatchError(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    const loginData = {
      email: formData.username,
      confirmPassword: formData.password,
    };

    // console.log(formData.username);
    try {
      // Send the loginData to the API using Axios
      const response = await axios.post(
        "https://apc-web-works-api.onrender.com/api/v1/loginUser",
        loginData
      );

      // alert("Login Response:", response.data);
      alert("Logged in successfully");
      // Handle success response from the API
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
      // Handle error response from the API
    }
    reset();
  };

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      const createAccountData = {
        username: formData.username,
        email: formData.email,
        contactNumber: formData.contact,
        confirmPassword: formData.password,
      };

      try {
        // Send the createAccountData to the API using Axios
        const response = await axios.post(
          "https://apc-web-works-api.onrender.com/api/v1/createUser",
          createAccountData
        );

        console.log("Create Account Response:", response.data);
        alert("Account created successfully");
        setLogInMode(true);
        reset();
        // Handle success response from the API
      } catch (error) {
        alert(error.response.data.message);
        // Handle error response from the API
      }
    } else {
      // Passwords don't match, set the error
      setPasswordMatchError(true);
    }
  };

  const handleSubmit = logInMode
    ? handleLoginSubmit
    : handleCreateAccountSubmit;

  return (
    <>
      <div className="container mx-auto h-screen w-screen flex flex-col justify-center items-center">
        <h2 className="text-2xl font-semibold mb-4">
          {logInMode ? "Log In" : "Create Account"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto w-[50%] sm:w-[80%]"
        >
          {!logInMode && (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="py-2 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
                required
              />
            </div>
          )}

          {!logInMode && (
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-medium mb-2"
              >
                Contact No.
              </label>
              <Input
                type="number"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="py-2 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              {!logInMode ? "Username" : "Email"}
            </label>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="py-2 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="py-2 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
              required
            />
          </div>
          {!logInMode && (
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="py-2 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
                required
              />
              {passwordMatchError && (
                <p className="text-red-500">Passwords do not match.</p>
              )}
            </div>
          )}
          <div className="w-full flex justify-evenly mt-10">
            <Button
              type="submit"
              className="border-1 border-gray-500 bg-gray-300 px-6 py-2 hover:bg-yellow-600 text-black font-bold"
            >
              {logInMode ? "Log In" : "Create Account"}
            </Button>

            <Button
              type="button"
              className="border-1 border-gray-500 bg-gray-300 px-6 py-2 hover:bg-yellow-600 text-black font-bold"
            >
              {/* {logInMode ? "Login with google" : "Login with google"} */}
              Log in with google
            </Button>
          </div>
        </form>
        <span className="mt-10">
          {logInMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setLogInMode(!logInMode)}
            className="text-blue-500 cursor-pointer"
          >
            {logInMode ? "Create Account" : "Log In"}
          </button>
        </span>
      </div>
    </>
  );
}

export default Auth;
