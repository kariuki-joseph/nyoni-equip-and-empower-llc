import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import logo from "../images/logo.png";
import { FaGoogle } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";

export default function SignIn() {
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleContinueClick = () => {
    setShowPasswordInput(true);
  };
  const hidePasswordField = () => {
    setShowPasswordInput(false);
  };

  const handleLogin = () => {
    console.log("login logic here...");
  };
  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center">
        <div className="w-[361px] px-2 pt-2 pb-3 rounded-lg shadow-lg flex-col justify-start items-center gap-4 inline-flex">
          <div className="w-full flex justify-start pt-3 ps-3">
            {showPasswordInput && (
              <IoArrowBack
                size={24}
                className="cursor-pointer"
                onClick={hidePasswordField}
              />
            )}
          </div>
          <div className="justify-center items-center inline-flex">
            <img src={logo} />
          </div>
          <div className="text-center">
            Continue With The Following To Create An Account To Get Started With
            Us
          </div>
          <div className="flex py-4 flex-col justify-start items-center gap-4 self-stretch">
            <div className="relative w-full mb-[75px]">
              <div
                className={`absolute w-full transition-all duration-500 ease-in-out transform ${
                  showPasswordInput ? "-translate-x-full" : "translate-x-0"
                }`}
              >
                {!showPasswordInput && (
                  <Input
                    type="email"
                    placeholder="Email"
                    onChange={(value) => {}}
                    className="w-full"
                  />
                )}
              </div>
              <div
                className={`absolute w-full transition-all duration-500 ease-in-out transform ${
                  showPasswordInput ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {showPasswordInput && (
                  <div className="flex flex-col items-end">
                    <Input
                      type="password"
                      placeholder="Password"
                      onChange={(value) => {}}
                    />
                    <span className="text-primary cursor-pointer pe-3 pt-1">
                      Forgot Password?
                    </span>
                  </div>
                )}
              </div>
            </div>

            <Button
              primary
              className="w-full"
              onClick={showPasswordInput ? handleLogin : handleContinueClick}
            >
              {showPasswordInput ? "Login" : "Continue"}
            </Button>
            <div className={`wd-fullen flex flex-col items-center gap-4 ${showPasswordInput? 'hidden': ''}`}>
              <span>Or</span>
              <Button className="w-full" secondary>
                <FaGoogle className="mr-2" /> Login with Google
              </Button>
              <div className="text-center">
                <span>Don’t have an account? </span>
                <NavLink to={"/signup"} className="text-primary cursor-pointer">
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
