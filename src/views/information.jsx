import "./information.css";
import Sidebar from "./components/Sidebar";

const Information = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>
        <header>
          <h1 id="title">Información</h1>
        </header>

        <div className="container">
          <nav className="horizontal-nav">
            <div className="nav-item">
              <h2>Proyecto</h2>
              <div className="select-container">
                <label htmlFor="proyect-select"></label>
                <select name="proyect" id="proyect-select">
                  <option value="andina">Región Andina</option>
                  <option value="caribe">Región Caribe</option>
                  <option value="pacifica">Región Pacífica</option>
                  <option value="amazonia">Región Amazonia</option>
                  <option value="orinoquia">Región Orinoquia</option>
                </select>
              </div>
            </div>

            <div className="nav-item">
              <h2>Cultivo</h2>
              <div className="select-container">
                <label htmlFor="cultivo-select"></label>
                <select name="cultivo" id="cultivo-select">
                  <option value="Arroz">Arroz</option>
                  <option value="Mandarina">Mandarina</option>
                  <option value="Cacao">Cacao</option>
                  <option value="Cafe">Café</option>
                </select>
              </div>
            </div>

            <div className="nav-item">
              <h2>Temporada</h2>
              <div className="select-container">
                <label htmlFor="Temporada"></label>
                <select name="Temporada" id="Temporada">
                  <option value="2024">2024</option>
                  <option value="2023">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
          </nav>
        </div>
        <br />
        
        <div className="table-container">
          <table id="table">
            <caption>Gastos</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Id Temporada</th>
                <th>Id Insumo</th>
                <th>cantidad Usada</th>
                <th>Precio Total</th>
                <th>Id Unidad Medida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <div className="table-container">
          <table id="table">
            <caption>Ventas</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Cantidad Vendida</th>
                <th>Precio Total</th>
                <th>Fecha Venta</th>
                <th>Id Temporada</th>
                <th>Observaciones</th>
                <th>Id Unidad Medida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <div className="table-container">
          <table id="table">
            <caption>Producciòn</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Cantidad Recolectada</th>
                <th>Fecha Recolecciòn</th>
                <th>Id Temporada</th>
                <th>Id Unidad Medida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <div className="table-container">
          <table id="table">
            <caption> Insumos</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre Insumo</th>
                <th>Cantidad Disponible</th>
                <th>Fecha Ingreso</th>
                <th>Precio Insumo</th>
                <th>Id Inventario</th>
                <th>Id Categoria</th>
                <th>Id Unidad Medida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>

        <div className="table-container">
          <table id="table">
            <caption>Actividades</caption>
            <thead>
              <tr>
                <th>Id</th>
                <th>Id Actividad</th>
                <th>Id Temporada</th>
                <th>Costo</th>
                <th>Gasto Insumo Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
              <tr>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
                <td>#</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
      </main>
    </div>
  );
};

export default Information;