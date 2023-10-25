
import { Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Profile from "./Pages/Profile"
import Dashboard from "./Pages/Dashboard"
import MyEarning from "./Pages/MyEarning"
import MyTeam from "./Pages/MyTeam"
import AddFunds from "./Pages/AddFunds"
import Topup from "./Pages/Topup"
import Withdrawal from "./Pages/Withdrawal"
import Login from "./Pages/Login"
import ChangePassword from "./Pages/ChangePassword"
import Footer from "./Components/Footer";
import Support from "./Pages/Support";
import TopupHistory from "./Pages/TopupHistory";

function App() {
  return (
    <>
   <div className="bg-blue-500">
   <Navbar className="z-9999"/>
   
   <Routes>
    <Route path="/" element={<Dashboard/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/changepassword" element={<ChangePassword/>}/>
    <Route path="/myteam" element={<MyTeam/>}/>
    <Route path="/myearning" element={<MyEarning/>}/>
    <Route path="/addfunds" element={<AddFunds/>}/>
    <Route path="/topup" element={<Topup/>}/>
    <Route path="/withdrawal" element={<Withdrawal/>}/>
    <Route path="/support" element={<Support/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/topuphistory" element={<TopupHistory/>}/>
   </Routes>
   <Footer/>
   </div>
    </>
  );
}

export default App;
