import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-4 border-b">
      <img src={assets.logo} className="w-40" alt="" />

      <ul className="hidden lg:flex gap-4 uppercase font-medium text-base text-gray-600">
        <li>
          <NavLink to="/" className="hover:text-gray-900">
            Home
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden" />
        </li>
        <li>
          <NavLink to="/doctors" className="hover:text-gray-900">
            all doctors
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden" />
        </li>
        <li>
          <NavLink to="/about" className="hover:text-gray-900">
            about
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden" />
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-gray-900">
            contact
          </NavLink>
          <hr className="w-1/2 bg-primary border-none h-0.5 mx-auto opacity-70 rounded-full hidden" />
        </li>
      </ul>

      <button className="bg-primary px-8 py-2 rounded-full text-white hidden sm:block hover:scale-105 transition-transform duration-200">
        Create Account
      </button>
    </div>
  );
};

export default Navbar;
