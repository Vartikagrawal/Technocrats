import "./App.css";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import PresenceTracker from "./Components/Countop";
import OnlineUserCount from "./Components/Countpre";
function App() {
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
