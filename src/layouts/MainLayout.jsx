import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="bg-gray-900">
      {/* Navbar */}
      <Navbar></Navbar>
      {/* dynamic content */}
      <div className="min-h-[calc(100vh-250px)] p-8">
        <Outlet></Outlet>
      </div>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
