import { NavLink, redirect } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from "./Button";

export default function NavBar() {
  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "PALS", path: "/pals" },
    { name: "ACLS", path: "/acls" },
    { name: "CPR Training", path: "/cpr-training" },
  ];

  return (
    <div>
      <div className="flex justify-around flex-shrink items-center">
        <div className="flex items-center space-x-5">
          <NavLink to={"/"} className="flex items-center mr-2">
            <img src={logo} className="w-[91px] h-20" alt="Nyoni LLC Logo" />

            <span>Nyoni Equip Support & Empower LLC</span>
          </NavLink>
          {routes.map((route, index) => (
            <NavLink
              key={index}
              to={route.path}
              className={({ isActive }) => (isActive ? "text-primary" : "")}
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        <NavLink
          to={"/signin"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <Button primary onClick={() => {}}>Sign In</Button>
        </NavLink>
      </div>
    </div>
  );
}
