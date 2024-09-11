import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  return (
    <div className=" ">
      <Header />
      <Speciality />
      <TopDoctors />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
