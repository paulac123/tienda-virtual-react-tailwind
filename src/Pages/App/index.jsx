import { BrowserRouter, Routes, Route } from "react-router-dom"; // ✅ Agregado Routes y Route

import { ShoppingCartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder"
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import Signin from "../Signin"
import Navbar from "../../Components/Navbar";
import CheckOutSideMenu from "../../Components/CheckOutSideMenu"
import './App.css'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clothes" element={<Home />} />
            <Route path="/electronics" element={<Home />} />
            <Route path="/furniturics" element={<Home />} />
            <Route path="/toys" element={<Home />} />
            <Route path="/othes" element={<Home />} />
            <Route path="/My-account" element={<MyAccount />} />
            <Route path="/My-order" element={<MyOrder />} />
            <Route path="/My-orders" element={<MyOrders />} />
            <Route path="/My-orders/last" element={<MyOrder />} />
            <Route path="/My-orders/:id" element={<MyOrder />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};


const App = () =>{
    return (
        <BrowserRouter>
        <ShoppingCartProvider>

            <AppRoutes/>
            <Navbar/>
            <CheckOutSideMenu/>
            

        </ShoppingCartProvider>
        </BrowserRouter>
    )
}

export default App