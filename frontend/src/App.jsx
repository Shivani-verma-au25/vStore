import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
// import Register from './pages/Register'
// import Login from './pages/Login'
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "sonner";
import Cart from "./pages/Cart";
import { useDispatch, useSelector } from "react-redux";
import { AxiosInstance } from "./utils/axios";
import { logout, setLoading, setUser } from "./store/authSlice";
import { Car, Loader } from "lucide-react";
import ProductDetail from "./pages/ProductDetail";
import Wishlist from "./components/Wishlist";
import Profile from "./components/Profile";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import AdminProducts from "./pages/AdminProducts";
import CreateProduct from "./pages/CreateProduct";
import Orders from "./components/Orders";
import Analatics from "./pages/Analatics";
import AllCustomers from "./pages/AllCustomers";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, users } = useSelector((state) => state.auth);

  const isAuthenticated = users != null;

  useEffect(() => {
    const checkAuth = async () => {
      try {
        dispatch(setLoading(true));
        const res = await AxiosInstance.get("/v1/user/check");
        console.log("res chek auth", res.data.user);
        dispatch(setUser(res.data?.user));
      } catch (error) {
        dispatch(logout());
        navigate("/login");
        console.log("error in check auth", error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    checkAuth();
  }, []);

  if (loading)
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Loader className="size-20 animate-spin transition-all duration-150" />
        Loading...
      </div>
    );

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/user" element={<UserDashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="order" element={<Orders />} />
        </Route>

        {/* <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="order" element={<Orders />} />
        </Route> */}

        {/* <Route path='/profile' element={ <Profile />  } />  */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* admin */}

        <Route path="/dashboard/admin" element={<AdminDashboard />}>
          <Route path="allproducts" element={<AdminProducts />} />
          <Route path="orders" element={<Orders />} />
          <Route path="createProduct" element={<CreateProduct />} />
          <Route path="analatics" element={<Analatics />} />
          <Route path="Allcustomers" element={<AllCustomers />} />
        </Route>

        <Route path="/shop" element={<Shop />} />
        {/* <Route path='/shop/product/detail/:id' element={  <ProductDetail />}  /> */}
        <Route path="/shop/product/detail" element={<ProductDetail />} />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path='/cart' element={<Cart />} />
        <Route path='/wishlist' element={<Wishlist />} /> */}
      </Routes>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
