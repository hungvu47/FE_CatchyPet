import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";


function ClientLayout() {
  return (
    <>
      <Header />
      <div className="page_background">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default ClientLayout;