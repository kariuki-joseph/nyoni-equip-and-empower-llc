import { NavLink, redirect } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaRegCircleUser } from "react-icons/fa6";



export default function AdminNavbar() {
  const routes = [
    { name: "Home", path: "/admin" },
  ];
  return (
    <div>
      <div className="flex justify-around flex-shrink items-center">
        <div className="flex items-center space-x-5">
          <NavLink to={"/admin"} className="flex items-center mr-2">
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
          to={"/admin/profile"}
          className={({ isActive }) => (isActive ? "text-primary" : "")}
        >
          <FaRegCircleUser/>
        </NavLink>
      </div>
    </div>
  )
}
