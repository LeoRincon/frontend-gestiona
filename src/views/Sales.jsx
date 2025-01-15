import "./sales.css";
import Sidebar from "./components/Sidebar";
import SalesHeader from "./components/SalesHeader";
import SalesBody from "./components/SalesBody";  


import "bootstrap/dist/css/bootstrap.min.css";

export default function Sales() {
  return (
    <div className="home-view">
      <Sidebar />
      <main className="page-container">
        <SalesHeader />
        <SalesBody />
      </main>
    </div>
  );
}
