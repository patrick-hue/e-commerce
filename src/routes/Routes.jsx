import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/About";
import Layout from "../components/Layout";
import CartPage from "../pages/cartlist";
import ProductDetails from "../pages/productdetail";
import LayoutAdmin from "../components/admin/Layout";
import Refund from "../pages/refund";
import Privacy from "../pages/privacy";
import Terms from "../pages/terms";
import Payment from "../pages/checkout-to-pay";
import Addproduct from "../pages/adminpage/addproduct";
import Notfound from "../pages/notfound";


function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/product/:product_id" element={<ProductDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/refund" element={<Refund />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/checkout-to-pay" element={<Payment />} />
            </Route>
            <Route path="/admin/*" element={<LayoutAdmin />}>
                <Route path="addproduct" element={<Addproduct />} />
                <Route path="*" element={<Notfound />} />
            </Route>
            <Route path="*" element={<Notfound />} />
        </Routes>
    );
}

export default Routing;
