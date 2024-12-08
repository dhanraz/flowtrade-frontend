import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Auth from "./pages/auth/Auth";
import Navbar from "./pages/navbar/Navbar";
import Portfolio from "./pages/portfolio/Portfolio";
import Wallet from "./pages/wallet/Wallet";
import Profile from "./pages/profile/Profile";
import WithdrawalAdmin from "./pages/admin/WithdrawalAdmin";
import Watchlist from "./pages/watchlist/Watchlist";
import PaymentDetails from "./pages/payment-details/PaymentDetails";
import Stockdetails from "./pages/stockdetails/Stockdetails";
import SearchCoin from "./pages/search/SearchCoin";
import NotFound from "./pages/notfound/NotFound";
import Activity from "./pages/activity/Activity";
import Withdrawal from "./pages/withdrawal/Withdrawal";
import { useEffect, useState } from "react";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import axios from "axios";
import { Toaster } from "@/components/ui/toaster"
import path from "path";
function App() {
  const[userDetails, setUserDetails] = useState(
    {
      isLoggedIn:false,
      jwt:localStorage.getItem("jwt")
    }
  )
  const handleLogin=(userDetails:any)=>{
    console.log("log in successful")
    setUserDetails({...userDetails})
  }
  useEffect(() => {
    const url = "http://localhost:8081/api/user/profile";
    axios
      .get(url,{
        headers: {
          'Authorization': 'Bearer '+localStorage.getItem("jwt"),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then((response) => {
        if(response.status)
        setUserDetails({...userDetails,"isLoggedIn":true});
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {
      !userDetails.isLoggedIn ? (
        <Auth handleLogin ={handleLogin} />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/auth/signin" element={<Signin />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/profile" element={<Profile userDetails={userDetails} />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/market/:id" element={<Stockdetails/>} />
            <Route path="/search" element={<SearchCoin />} />
            <Route path="/payment-details" element={<PaymentDetails />} />
            <Route path="/withdrawal" element={<Withdrawal />} />
            <Route path="/admin/withdrawal" element={<WithdrawalAdmin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Toaster/>
        </div>
      )}
    </div>
  );
}

export default App;
