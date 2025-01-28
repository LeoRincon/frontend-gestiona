import "./styles/sales.css";
import Sidebar from "./components/Sidebar";
import SalesHeader from "./components/SalesHeader";
import SalesBody from "./components/SalesBody";
import InsertSalesModal from "./components/insertSalesModal";
import { useRef, useEffect, useState } from "react";
import { getSalesData } from "../services/saleService";

export default function Sales() {
  const [dataTable, setDataTable] = useState([]);
  useEffect(() => {
    const getSale = async () => {
      const saleData = await getSalesData();
      setDataTable(saleData);
    };
    getSale();
  }, []);

  const insertModalRef = useRef(null);
  const handelOpenIsertModal = () => {
    insertModalRef.current.showModal();
  };

  const handelCloseIsertModal = () => {
    insertModalRef.current.close();
  };

  return (
    <div className="home-view">
      <Sidebar />
      <main className="page-container">
        <SalesHeader />
        <SalesBody
          onClickAddButton={handelOpenIsertModal}
          dataTable={dataTable}
        />
      </main>
      <InsertSalesModal onClose={handelCloseIsertModal} ref={insertModalRef} />
    </div>
  );
}
