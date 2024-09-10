import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* left */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-[5vw] xl:py-[10vw]">
        <h2 className="text-2xl sm:text-3xl xl:text-5xl font-semibold text-white  ">
          Book Appointment <br className="hidden sm:block mb-10 pb-10" />
          With Trusted Doctors
        </h2>

        <div className="flex gap-3 items-center text-sm text-white font-light">
          <img
            src={assets.group_profiles}
            className="w-24 hidden md:block"
            alt=""
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#"
          className="bg-slate-100 flex gap-1 sm:gap-2 md:gap-4 text-gray-900 px-3 md:px-8 py-3 rounded-full text-sm md:text-base hover:scale-110 transition"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* right */}
      <div className=" md:block md:w-1/2 relative ">
        <img
          src={assets.header_img}
          className="w-full sm:w-[80%] md:w-[90%] mx-auto md:absolute lg:w-full bottom-0 h-auto "
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
