import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState();
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const getDocInfo = () => {
    const doc = doctors.find((doctor) => doctor._id === docId);
    setDocInfo(doc);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);

      const endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getDocInfo();
    setLoading(false);
  }, [docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  if (loading) return <h2>Loading....</h2>;

  // console.log(docInfo?.speciality);

  return (
    <div className="mb-[200px] mt-20">
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            src={docInfo?.image}
            className="w-full sm:max-w-72 bg-primary rounded-lg"
            alt=""
          />
        </div>

        <div className="flex-1 border border-gray-600 p-8 rounded-lg mx-2 mt-[-80px] sm:mt-0 bg-white ">
          <div className="flex gap-3 items-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              {docInfo?.name}{" "}
            </h2>
            <img src={assets.verified_icon} className="w-5" alt="" />
          </div>

          <div className="flex items-center gap-2 text-gray-600 mt-1 text-sm">
            <p className="font-medium text-gray-600">
              {docInfo?.degree} - {docInfo?.speciality}{" "}
            </p>
            <button className="border border-gray-600 px-2 py-0.5 rounded-full text-sm">
              {docInfo?.experience}{" "}
            </button>
          </div>

          <div className="flex gap-3 mt-3 text-sm">
            <p className="font-semibold text-gray-800">About</p>
            <img src={assets.info_icon} className="w-4" alt="" />
          </div>

          <p className="text-gray-500 text-sm max-w-[700px] mt-1 tracking-wide">
            Dr. Davis has a strong commitment to delivering comprehensive
            medical care, focusing on preventive medicine, early diagnosis, and
            effective treatment strategies. Dr. Davis has a strong commitment to
            delivering comprehensive medical care, focusing on preventive
            medicine, early diagnosis, and effective treatment strategies.
          </p>

          <p className="mt-4 text-gray-600">
            Appointment Fee:{" "}
            <span className="font-semibold">
              {currencySymbol}
              {docInfo?.fees}
            </span>{" "}
          </p>
        </div>
      </div>

      {/* booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>booking slots</p>

        <div className="flex gap-3 items-center mt-4 w-full overflow-auto">
          {docSlots.map((item, index) => (
            <div
              key={index}
              onClick={() => setSlotIndex(index)}
              className={`text-center py-6 min-w-16  border rounded-full cursor-pointer ${
                slotIndex === index ? "bg-primary text-white" : ""
              }`}
            >
              <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
      </div>

      {/* related doctors */}
      <RelatedDoctors speciality={docInfo?.speciality} />
    </div>
  );
};

export default Appointment;
