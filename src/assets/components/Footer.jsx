import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { RiFacebookBoxLine } from "react-icons/ri";

export default function Footer() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-32 items-start">
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center">
          <img src={logo} alt="Nyoni LLC Logo" className="w-[90px] h-[80px]" />
          <span className="font-bold text-base">
            Nyoni Equip Support & Empower LLC
          </span>
        </div>
        <p>
          We are a healthcare business that is aimed at delivering quality
          healthcare and safety certification training classes.
        </p>
      </div>

      <div className="flex flex-col">
        <h3 className="text-primary text-2xl">Quick Links</h3>
        <ul className="flex flex-col gap-y-3 mt-3">
          <li>
            <NavLink to="/" className="font-bold text-sm underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="font-bold text-sm underline">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/cpr-training" className="font-bold text-sm underline">
              CPR Training Classes
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <h3 className="text-primary text-2xl">Contact Us</h3>
        <ul className="flex flex-col gap-y-3 mt-3">
          <li>
            <NavLink to="#" className="flex items-center">
              <MdOutlineMailOutline size={24} className="mr-2" />{" "}
              nyonicpr@gmail.com
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="flex items-center">
              <LuPhone size={24} className="mr-2" /> 918-408-6772
            </NavLink>
          </li>
          <li>
            <NavLink to="#" className="flex items-center">
              <RiFacebookBoxLine size={24} className="mr-2" /> Facebook
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
