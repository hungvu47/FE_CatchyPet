import { Navigate, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
//
import ClientLayout from "./layout/ClientLayout";
import Layout from "./layout/Layout";
import AdminLayout from "./layout/adminLayout/AdminLayout";
import Loader from "./utiliti/loader";
//
import ProductList from "./page/admin/productList";
import AuthProvider from "./page/auth/login/AuthProvider";


const Login = React.lazy(() => import("./page/auth/login/Login"));
const Register = React.lazy(() => import("./page/auth/register/Register"));
import PricePage from "./page/price/PricePage";
import Introduce from "./page/introduce/Introduce";
import Booking from "./page/booking/Booking";
import Contact from "./page/contact/Contact";

import ListProduct from "./page/product/ListProduct";
import ProductDetails from "./components/Product/productDetails/ProductDetails";

import AddressProfile from "./page/address/Address";
import ProfileUser from "./page/profile/Profile";
import ChangePassword from "./page/profile/ChangePassword";
import PurchaseOrder from "./page/profile/Purchase";
import PurchaseDetail from "./page/profile/PurchaseDetail";
import Cart from "./page/cart/Cart";
import Pay from "./page/pay/Pay";
import AdminPage from "./page/admin/home/AdminPage";
import Blog from "./page/blog/Blog";
import ByCategory from "./page/product/ByCategory";
import CategoryAdmin from "./page/admin/categories/CategoryAdmin";
import OrderAdmin from "./page/admin/order/OrderAdmin";
import AppointmentAdmin from "./page/admin/appoinment/AppointmentAdmin";
import ServicesPet from "./page/admin/servicePet/ServicesPet";
//

const HomePage = React.lazy(() => import("./page/home/HomePage"));
function App() {
  return (
    // <div className="App">
    //   <React.Suspense fallback={<Loader />}>
    //     <AuthProvider >

    //       <Routes>

    //         <Route path="/" element={<ClientLayout />}>
    //           <Route index element={<Navigate to="home" />} />
    //           <Route path="home" element={<HomePage />} />
    //           <Route path="san-pham" element={<ListProduct />} />
    //           <Route path="bang-gia" element={<PricePage />} />
    //           <Route path="tin-tuc" element={<Blog />} />
    //           <Route path="dat-lich" element={<Booking />} />
    //           <Route path="lien-he" element={<Contact />} />

    //           <Route path="san-pham/:productId/:productName" element={<ProductDetails />} />

    //           <Route path="cart" element={<Cart />} />
    //           <Route path="account/address" element={<AddressProfile />} />
    //           <Route path="account/profile" element={<ProfileUser />} />
    //           <Route path="account/change-password" element={<ChangePassword />} />
    //           <Route path="user/purchase" element={<PurchaseOrder />} />
    //           <Route path="user/purchase/details" element={<PurchaseDetail />} />

    //         </Route>

    //         {/* Router Admin */}
    //         <Route path="admin/" element={<AdminLayout />}>
    //           <Route index element={<AdminPage />} />
    //           <Route path="products" element={<ProductList />} />
    //         </Route>

    //         <Route path="/check-out" element={<Pay />} />
    //         <Route path="check-out/thank-you" element={<PayComplete />} />

    //         <Route path="/login" element={<Login />} />
    //         <Route path="/register" element={<Register />} />

    //       </Routes>

    //     </AuthProvider>

    //   </React.Suspense>

    //   <ToastContainer />
    // </div>
    <div className="App">
      <React.Suspense fallback={<Loader />}>
        <AuthProvider>

          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<ClientLayout />}>
                <Route index element={<Navigate to="home" />} />
                <Route path="home" element={<HomePage />} />
                <Route path="san-pham" element={<ListProduct />} />
                <Route path="bang-gia" element={<PricePage />} />
                <Route path="tin-tuc" element={<Blog />} />
                <Route path="gioi-thieu" element={<Introduce />} />
                <Route path="dat-lich" element={<Booking />} />
                <Route path="lien-he" element={<Contact />} />

                <Route path="sanpham/:categoryId/:categoryName" element={<ByCategory />} />
                <Route path="san-pham/:productId/:productName" element={<ProductDetails />} />

                <Route path="cart" element={<Cart />} />
                <Route path="account/address" element={<AddressProfile />} />
                <Route path="account/profile" element={<ProfileUser />} />
                <Route path="account/change-password" element={<ChangePassword />} />
                <Route path="user/purchase" element={<PurchaseOrder />} />
                <Route path="user/purchase/details/:orderId" element={<PurchaseDetail />} />

              </Route>
            </Route>

            {/* Router Admin */}
            <Route path="admin/"
              element={
                // <PrivateLayout>
                <AdminLayout />
                // </PrivateLayout>
              }
            >
              <Route index element={<AdminPage />} />
              <Route path="products" element={<ProductList />} />
              <Route path="categories" element={<CategoryAdmin />} />
              <Route path="orders" element={<OrderAdmin />} />
              <Route path="appointment" element={<AppointmentAdmin />} />
              <Route path="services" element={<ServicesPet />} />

            </Route>

            <Route path="/check-out" element={<Pay />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          {/* {isLayoutRoute && <ChatBox />} */}
        </AuthProvider>
      </React.Suspense>
    </div>
  )
}

export default App
