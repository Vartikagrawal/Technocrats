import "./App.css";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PresenceTracker from "./Components/Countop";
import OnlineUserCount from "./Components/Countpre";
import { useEffect } from "react";
function App() {
   useEffect(() => {
  console.log(
    "%cDeveloped by Team Technocrats",
    "color: #0a66c2; font-weight: bold; font-size: 14px;"
  );
}, []);
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          success: {
            theme: {
              primary: "#4aed88",
            },
          },
        }}
      ></Toaster>
      <div className="livebanner">
      <PresenceTracker />
      </div>

      <div className="container">
        <Header />
        <Outlet />  {/* This renders the page-specific content */}
        <Footer />
      </div>
    </>
  );
}

export default App;
