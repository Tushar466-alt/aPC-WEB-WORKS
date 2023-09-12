// import React, { useState } from "react";
// import Input from "../../Utilities/Input";
// import Button from "../../Utilities/Button";

// function Auth() {
//   const [logInMode, setLogInMode] = useState(true); // Default to login mode

//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//     email: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (logInMode) {
//       console.log("Logging in with data:", formData);
//       // Add your login logic here
//     } else {
//       console.log("Signing up with data:", formData);
//       // Add your sign-up logic here
//     }
//   };

//   return (
//     <div className="container mx-auto mt-8 h-screen w-screen flex flex-col justify-center items-center">
//       <h2 className="text-2xl font-semibold mb-4">{logInMode ? "Log In" : "Sign Up"}</h2>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto w-[50%] sm:w-[80%]">
//         {!logInMode && (
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
//               Email
//             </label>
//             <Input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="py-3 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
//               required
//             />
//           </div>
//         )}
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
//             Username
//           </label>
//           <Input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="py-3 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
//             Password
//           </label>
//           <Input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="py-3 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
//             required
//           />
//         </div>
//         {!logInMode && (
//           <div className="mb-4">
//             <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
//               Confirm Password
//             </label>
//             <Input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="py-3 text-left border-2 focus:border-l-8 focus:border-yellow-400 border-gray-200 outline-yellow-400 transition-all duration-500"
//               required
//             />
//           </div>
//         )}
//         <Button
//           type="submit"
//           className="border-2 bg-gray-300 px-14 py-3 hover:bg-yellow-600 text-black font-bold"
//         >
//           {logInMode ? "Log In" : "Sign Up"}
//         </Button>
//       </form>
//       <span className="mt-10">
//         {logInMode ? "Don't have an account?" : "Already have an account?"}{" "}
//         <button
//           onClick={() => setLogInMode(!logInMode)}
//           className="text-blue-500 cursor-pointer"
//         >
//           {logInMode ? "Sign Up" : "Log In"}
//         </button>
//       </span>
//     </div>
//   );
// }

// export default Auth;

import React, { useState } from "react";
import Input from "../../Utilities/Input";
import Button from "../../Utilities/Button";

function Auth() {
  const [logInMode, setLogInMode] = useState(true); // Default to login mode

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (logInMode) {
      console.log("Logging in with data:", formData);
      // Add your login logic here
    } else {
      console.log("Signing up with data:", formData);
      // Add your sign-up logic here
    }
  };

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
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 font-medium mb-2"
            >
              Username
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
