import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="text-gray-600 ">
      <div className="flex flex-col md:flex-row gap-9 py-10">
        {/* left */}
        <div className="w-full min-w-[200px] lg:w-2/4 text-justify ">
          <img src={assets.logo} className="w-40 mb-8" alt="" />
          <p className="md:w-[90%] text-sm md:text-base leading-relaxed tracking-wide">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* center */}
        <div className=" flex-1">
          <h2 className="mb-5 md:mb-8 font-semibold text-gray-600 text-base md:text-lg">
            Company
          </h2>

          <ul className="flex flex-col gap-2 text-sm md:text-base">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* right */}
        <div className="flex-1 ">
          <h2 className="mb-5 md:mb-8 font-semibold text-gray-600 text-base md:text-lg">
            Gen in Touch
          </h2>

          <ul className="flex flex-col gap-2  text-sm md:text-base">
            <li>
              <p>+880 123 456 789</p>
            </li>
            <li>
              <Link
                to="mailto:robiul100.me@gmail.com"
                className="hover:underline"
              >
                robiul100.me@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="py-3 md:py-6 text-center text-sm md:text-base">
        Copyright &copy; 2024. All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
