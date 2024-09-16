import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";

const Navbar = () => {
  const token = true;
  const [openMenu, setOpenMenu] = useState(false);

  // to close the menu
  const closeMenu = () => {
    setOpenMenu(false);
  };

  // to disable scrolling effect while menu is on
  useEffect(() => {
    openMenu
      ? document.body.classList.add("hide-scroll")
      : document.body.classList.remove("hide-scroll");
  }, [openMenu]);

  return (
    <div className="flex items-center justify-between  border-b h-[70px] mb-5">
      {/* site logo */}
      <Link to={"/"}>
        <img src={assets.logo} className="w-32 md:w-40" alt="" />
      </Link>

      {/* nav links */}
      <ul className="hidden lg:flex gap-4 uppercase font-medium text-base text-gray-600">
        <li>
          <NavLink to="/" className="hover:text-gray-900">
            Home
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden mt-0.5" />
        </li>
        <li>
          <NavLink to="/doctors" className="hover:text-gray-900">
            all doctors
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden mt-0.5" />
        </li>
        <li>
          <NavLink to="/about" className="hover:text-gray-900">
            about
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden mt-0.5" />
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-gray-900">
            contact
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden mt-0.5" />
        </li>
      </ul>

      {/* to show user icon or account create button depending on user login state */}
      {token ? (
        <div className="relative group transition duration-500">
          <div
            className="flex gap-2 group cursor-pointer "
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <img
              src={assets.profile_pic}
              className="w-12 h-12 rounded-full"
              alt=""
            />
            <img
              src={assets.dropdown_icon}
              className={`w-3 transition duration-300 ${
                openMenu && "rotate-180"
              }`}
              alt=""
            />
          </div>

          {openMenu && (
            <div className="border w-[220px] p-4  rounded-lg  absolute right-0 top-full bg-white z-20">
              <ul className="flex flex-col gap-2 transition">
                <li className="">
                  <Link
                    onClick={closeMenu}
                    to="/my-profile"
                    className="p-2 bg-blue-50 rounded-sm block  hover:bg-blue-200  transition duration-300"
                  >
                    My Profile
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={closeMenu}
                    to="/my-appointment"
                    className="p-2 bg-blue-50 rounded-sm block hover:bg-blue-200  transition duration-300"
                  >
                    My Appointment
                  </Link>
                </li>
                <li className="">
                  <Link
                    onClick={closeMenu}
                    to="/login"
                    className="p-2 bg-blue-50 rounded-sm block hover:bg-blue-200  transition duration-300"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button className="bg-primary px-8 py-2 rounded-full text-white hidden sm:block hover:scale-105 transition-transform duration-200">
          Create Account
        </button>
      )}

      {/* black container for menu */}
      {openMenu && (
        <div
          className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black z-10 opacity-40"
          onClick={() => setOpenMenu((prev) => !prev)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
