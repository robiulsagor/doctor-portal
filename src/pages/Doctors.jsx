/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useParams } from "react-router-dom";

const Doctors = () => {
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const [fiterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="py-16">
      <h2 className="text-gray-800 font-medium mb-5">
        Browse through the doctors speciaLinkst.
      </h2>
      <div className="flex flex-col sm:flex-row justify-start gap-2 md:gap-10">
        <div className="flex flex-col items-start gap-3 text-sm">
          <Link
            to={`/doctors`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50 ${
              speciality === undefined ? "bg-indigo-100" : ""
            }`}
          >
            All
          </Link>
          <Link
            to={`/doctors/General physician`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50 ${
              speciality === "General physician" ? "bg-indigo-100" : ""
            }`}
          >
            General physician
          </Link>
          <Link
            to={`/doctors/Gynecologist`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50 ${
              speciality === "Gynecologist" ? "bg-indigo-100" : ""
            }`}
          >
            Gynecologist
          </Link>
          <Link
            to={`/doctors/Dermatologist`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50  ${
              speciality === "Dermatologist" ? "bg-indigo-100" : ""
            }`}
          >
            Dermatologist
          </Link>
          <Link
            to={`/doctors/Pediatricians`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50 ${
              speciality === "Pediatricians" ? "bg-indigo-100" : ""
            }`}
          >
            Pediatricians
          </Link>
          <Link
            to={`/doctors/Neurologist`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50 ${
              speciality === "Neurologist" ? "bg-indigo-100" : ""
            }`}
          >
            Neurologist
          </Link>
          <Link
            to={`/doctors/Gastroenterologist`}
            className={`w-[94vw] sm:w-[200px] border border-blue-200 px-4 py-2 text-gray-800 cursor-pointer rounded-md hover:bg-indigo-50 ${
              speciality === "Gastroenterologist" ? "bg-indigo-100" : ""
            }`}
          >
            Gastroenterologist
          </Link>
        </div>

        {fiterDoc.length === 0 ? (
          <div className="  w-full flex items-center justify-center">
            <h2 className="text-red-400 font-semibold text-2xl sm:text-3xl md:text-4xl text-center">
              No Doctors Found!
            </h2>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center gap-5 mt-6">
            {fiterDoc.map((item, index) => (
              <Link
                to={`/appointment/${item._id}`}
                onClick={() => scrollTo(0, 0)}
                key={index}
                className="w-56 border border-blue-200 bor4er b2rder-blue-200-blu4-2002rounded-md flex flex-col gap-4 hover:scale-110 transition-all duration-300"
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
        )}
      </div>
    </div>
  );
};

export default Doctors;
