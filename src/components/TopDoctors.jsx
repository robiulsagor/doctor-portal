import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="my-16 text-gray-800 flex flex-col gap-4 items-center md:mx-10">
      <h1 className="text-3xl font-semibold text-center">
        Top Doctors to Book
      </h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors
      </p>

      <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
        {doctors.slice(0, 10).map((item, index) => (
          <Link
            to={`/appointment/${item._id}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className="w-48 border border-blue-200 rounded-md flex flex-col gap-4 hover:scale-110 transition-all duration-300"
          >
            <img
              src={item.image}
              alt=""
              className="w-full h-auto bg-blue-50 rounded-tl-md rounded-tr-md overflow-hidden"
            />
            <div className="px-3 pb-2 flex flex-col gap-0.5">
              <div className="flex gap-2 items-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <p className="text-sm text-green-600">Available </p>
              </div>

              <p className="font-medium">{item.name} </p>
              <p className="text-sm text-gray-500">{item.speciality} </p>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/doctors"
        onClick={() => scrollTo(0, 0)}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full hover:bg-slate-200 transition duration-300 mt-10 font-medium"
      >
        More
      </Link>
    </div>
  );
};

export default TopDoctors;
