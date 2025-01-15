import React, { useState,useEffect } from "react";
import DeleteIcon from "../icons/Delete";
import UpdateIcon from "../icons/Update";
import InsertIcon from "../icons/Insert";
import PopupSales from "../PopupSales";

function SalesBody() {
  const [isOpen, setIsOpen] = useState(false);
  const [popup, setPopup] = useState(null);
  const [selectedData, setSelectedData] = useState(null);


  const updatePopup = (rowData) => {
    setSelectedData(rowData);
    setPopup('btn_update'); 
    setIsOpen(!isOpen);
  };

  const deletePopup = (rowData) => {
    setSelectedData(rowData);
    setPopup('btn_delete'); 
    setIsOpen(!isOpen);
  };

  const insertPopup = () => {
    setPopup('btn_insert'); 
    setIsOpen(!isOpen);
  };

 useEffect(() => {
  const handleEscKey = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  window.addEventListener('keydown', handleEscKey);

  
  return () => {
    window.removeEventListener('keydown', handleEscKey);
    };
  }, []);
  const dataDummy = [
    {
      id: 5,
      idTempo: "tem5",
      fechaVta: "10/12/2024",
      CanVen: "50",
      PreUni: "10",
      PreTotal: "500",
      observaciones: "xxxxx",
      UnidadMedida: "kg",
    },
    {
      id: 6,
      idTempo: "tem6",
      fechaVta: "10/12/2024",
      CanVen: "60",
      PreUni: "10",
      PreTotal: "400",
      observaciones: "xxxxx",
      UnidadMedida: "gr",
    },
    {
      id: 7,
      idTempo: "tem7",
      fechaVta: "10/12/2024",
      CanVen: "70",
      PreUni: "10",
      PreTotal: "600",
      observaciones: "xxxxx",
      UnidadMedida: "kg",
    },
    {
      id: 8,
      idTempo: "tem8",
      fechaVta: "10/12/2024",
      CanVen: "80",
      PreUni: "10",
      PreTotal: "700",
      observaciones: "xxxxx",
      UnidadMedida: "gr",
    },
    {
      id: 9,
      idTempo: "tem9",
      fechaVta: "10/12/2024",
      CanVen: "90",
      PreUni: "10",
      PreTotal: "800",
      observaciones: "xxxxx",
      UnidadMedida: "kg",
    }
  ];

  const [busqueda, setBusqueda] = useState("");
  const datosFiltrados = dataDummy.filter(
    (dato) =>
      dato.id.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.idTempo.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.fechaVta.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.CanVen.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.PreUni.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.PreTotal.toString().toLowerCase().includes(busqueda.toLowerCase()) ||
      dato.observaciones
        .toString()
        .toLowerCase()
        .includes(busqueda.toLowerCase()) ||
      dato.UnidadMedida.toString()
        .toLowerCase()
        .includes(busqueda.toLowerCase())
  );
  return (
    <section className="main-container__admin-user">
      <div className="container mt-5">
        <div className="search-container ">
          <i className="fas fa-search"></i>
          <input
            className="form-control"
            id="searchInput"
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar..."
          />
        </div>
       
        <div className="d-flex justify-content-end InsertIcon">
            <i onClick={insertPopup}>
            <InsertIcon />
          </i>
       </div>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Temporada</th>
                <th>Fecha de Venta</th>
                <th>Cantidad vendida</th>
                <th>Unidad de Medida</th>
                <th>Precio unitario</th>
                <th>Precio Total</th>
                <th>Observaciones</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody id="table-body">
              {datosFiltrados.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.idTempo}</td>
                  <td>{dato.fechaVta}</td>
                  <td>{dato.CanVen}</td>
                  <td>{dato.UnidadMedida}</td>
                  <td>{dato.PreUni}</td>
                  <td>{dato.PreTotal}</td>
                  <td>{dato.observaciones}</td>
                  <td>
                    <i onClick={() => updatePopup(dato)}>
                      <UpdateIcon />
                    </i>
                    <i onClick={() => deletePopup(dato)}>
                      <DeleteIcon />
                    </i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isOpen && (
            <PopupSales isOpen={isOpen} setIsOpen={setIsOpen} dato={selectedData} popup={popup}/>
         
          )}
        </div>
        <nav>
          <ul
            className="pagination justify-content-center"
            id="pagination"
          ></ul>
        </nav>
      </div>
    </section>
  );
}

//}
export default SalesBody;
