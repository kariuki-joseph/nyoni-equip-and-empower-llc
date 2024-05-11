import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import logo from "../images/logo.png";
import { FaGoogle } from "react-icons/fa";
import { GoShieldLock } from "react-icons/go";

export default function SignUp() {
  return (
    <div>
      <NavBar />

      <div className="flex justify-center items-center pb-1 mb-3">
        <div className="w-[430px] px-2 py-1 rounded-lg shadow-lg flex-col justify-start items-center gap-4 inline-flex">
          <div className="justify-center items-center inline-flex">
            <img src={logo} />
          </div>
          <div className="text-center">
            Continue With The Following To Create An Account To Get Started With
            Us
          </div>
          <div className="flex py-4 flex-col justify-start items-center gap-4 self-stretch">
            <Input
              placeholder="Username"
              type="text"
              onChange={(value) => {}}
            />
            <Input placeholder="Email" type="email" onChange={(value) => {}} />
            <Input placeholder="Phone" type="phone" onChange={(value) => {}} />
            <Input
              placeholder="Password"
              type="password"
              onChange={(value) => {}}
            />
            <Input
              placeholder="Repeat Password"
              type="password"
              onChange={(value) => {}}
            />

            <Button primary className="w-full">
              Register
            </Button>
            <p>
              Already have an acount?{" "}
              <NavLink to="/signin" className="text-primary cursor-pointer">
                {" "}
                Login
              </NavLink>
            </p>
            <span>Or</span>
            <Button className="w-full" secondary>
              <FaGoogle className="mr-2" size={24} /> Continue with Google
            </Button>
            <div className="w-full h-[1px] bg-black"></div>

            <NavLink
              to={"/admin/login"}
              className="text-primary cursor-pointer w-full"
            >
              <Button secondary className="w-full">
                {" "}
                <GoShieldLock className="mr-2" size={24} />
                Login As Admin
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
