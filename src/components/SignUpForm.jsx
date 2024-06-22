import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from 'react-icons/fa';
import img from "../assets/signup.png"

const SignUpForm = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-end sm:items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-full h-92 xl:w-2/4 xl:h-auto bg-white  rounded-lg shadow-lg max-w-3xl relative">
        <button onClick={onClose} className="absolute top-[-40px] right-0 text-gray-500  rounded-full bg-gray-400 w-8 hover:text-black text-2xl">
          &times;
        </button>
        <div className="text-[#008A45] bg-green-200 py-4 text-center font-medium rounded-lg hidden xl:block">
          Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
        </div>
        <div className="xl:flex px-2 py-4 justify-between">
          <div className="xl:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Create Account</h2>
            <div className="grid grid-cols-2 gap-1 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 rounded-md p-2"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-md p-2 w-full mb-4"
            />
            <div className="relative mb-4">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="border border-gray-300 rounded-md p-2 w-full pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-gray-300 rounded-md p-2 w-full mb-6"
            />
            <button className="w-full text-white bg-blue-600 rounded-full py-2 font-semibold hover:bg-blue-700 mb-4">
              Create Account
            </button>
          <div className="text-center mb-4">
              <button className="flex items-center justify-center border border-gray-300 rounded-md py-2 w-full mb-2 text-gray-700 hover:bg-gray-100">
                <FaFacebook className="text-blue-600 mr-2" />
                Sign up with Facebook
              </button>
              <button className="flex items-center justify-center border border-gray-300 rounded-md py-2 w-full text-gray-700 hover:bg-gray-100">
                <FaGoogle className="text-red-600 mr-2" />
                Sign up with Google
              </button>
            </div>

          </div>

          <div className="xl:w-1/2 px-2 flex  flex-col justify-evenly">
          <div className="  text-center xl:text-right">Already have an account?<span className='text-blue-500'> Sign In</span></div>
            <img src={img} alt="" className='hidden xl:block' />
          <p className=' text-center xl:text-right  text-[11px] text-gray-400'>By signing up, you agree to our Terms & conditions, Privacy policy</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
