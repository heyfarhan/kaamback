import { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../context/AuthContext";
import logoLight from "../assets/logoLight.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useContext(AuthContext);

  const getLinkClass = (path: string) => {
    const isActive = location.pathname === path;
    return isActive ? "underline" : "hover:underline focus:underline";
  };

  const textColor =
    location.pathname === "/" ? "text-white" : "md:text-[#041893] text-white";
  const bgColor =
    location.pathname === "/"
      ? ""
      : "md:bg-[#041893] md:text-white text-[#041893] bg-white";

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="absolute w-full z-10 top-0 left-0">
      <div className="md:flex items-center justify-between md:bg-transparent bg-[#041893] py-3 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-Oxanium text-gray-800">
          <NavLink
            to="/"
            className={`text-white flex items-center gap-1 ${textColor}`}
          >
            <img src={logoLight} alt="logo" className="h-7" /> Kaamback
          </NavLink>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute right-8 top-2.5 cursor-pointer md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`flex flex-col items-center md:flex md:flex-row md:items-center  md:pb-0  ${textColor} pb-4 absolute md:static md:bg-transparent bg-[#041893] md:z-auto z-[-10] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-200 ease-in pt-3 md:pt-0 ${
            open ? "top-[56px]" : "top-[-180px]"
          }`}
        >
          <li className="font-semibold p-1 md:p-1 pl-2 mr-7 rounded-sm">
            <NavLink to="/" className={getLinkClass("/")}>
              Home
            </NavLink>
          </li>
          <li className="font-semibold p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/career" className={getLinkClass("/career")}>
              Career
            </NavLink>
          </li>
          {/* <li>hello</li> */}
          <li className="font-semibold p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/hire" className={getLinkClass("/hire")}>
             Hire
            </NavLink>
          </li>
          <li className="font-semibold p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink to="/ourteam" className={getLinkClass("/ourteam")}>
              Our Team
            </NavLink>
          </li>
          <li className="font-semibold p-1 pl-2 md:p-1 mr-7 rounded-sm">
            <NavLink
              to="/company-dashboard"
              className={getLinkClass("/company-dashboard")}
            >
              Company
            </NavLink>
          </li>

          {user ? (
            // If the user is logged in, show Logout and Profile
            <>
              <li className="font-semibold flex gap-2 items-center">
                <span className={`font-semibold  mt-2 px-3 py-1 md:mt-0 rounded-full capitalize ${bgColor}`}>
                  Hi, {user?.user?.name}
                  {console.log(user)}
                </span>
                <button
                  onClick={handleLogout}
                  className={`font-semibold mr-4 mt-2 px-3 py-1 md:mt-0 rounded-full capitalize ${bgColor} hover:underline`}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            // If the user is not logged in, show Login and Signup options
            <>
              <>
                <div
                  className={`font-semibold mr-4 mt-2 md:mt-0 rounded-full ${bgColor}`}
                >
                  <li className="font-semibold py-2 px-3 text-center cursor-pointer">
                    <NavLink to="/login" className="mr-2 hover:underline ">
                      Login
                    </NavLink>
                    <span>/</span>
                    <NavLink to="/signup" className="ml-2 hover:underline ">
                      SignUp
                    </NavLink>
                  </li>
                </div>
              </>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
