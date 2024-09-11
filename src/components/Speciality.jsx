import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const Speciality = () => {
  return (
    <div
      id="speciality"
      className="py-16 text-gray-800 flex flex-col gap-4 items-center"
    >
      <h1 className="text-3xl font-semibold text-center">Find By Speciality</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free
      </p>

      <div className="flex sm:justify-center sm:pl-20 gap-4 md:gap-6 pt-5 w-full overflow-scroll">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col gap-2 items-center text-xs flex-shrink-0 hover:-translate-y-3 transition duration-300"
          >
            <img src={item.image} className="w-16 sm:w-24" />
            <p className="">{item.speciality} </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Speciality;
