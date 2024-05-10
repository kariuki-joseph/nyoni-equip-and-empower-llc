import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import NavBar from "../components/NavBar";
import logo from "../images/logo.png";
import { FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center">
        <div className="w-[361px] px-2 py-2 rounded-lg shadow-lg     flex-col justify-start items-center gap-4 inline-flex">
          <div className="justify-center items-center inline-flex">
            <img src={logo} />
          </div>
          <div className="text-center">
            Continue With The Following To Create An Account To Get Started With
            Us
          </div>
          <div className="flex py-4 flex-col justify-start items-center gap-4 self-stretch">
            <Input placeholder={"Email"} />
            <Button primary className="w-full">
              Continue
            </Button>
            <span>Or</span>
            <Button className="w-full" secondary>
              <FaGoogle  className="mr-2"/> Login with Google
            </Button>
            <div className="text-center">
              <span className="font-bold">Don’t have an account? </span>
              <NavLink to={'/signup'} className="text-primary cursor-pointer">Register</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
