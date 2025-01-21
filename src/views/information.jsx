import './styles/information.css';
import Sidebar from './components/Sidebar';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { getInformation } from '../services/informationServices';
import { getColumnsOfData } from '../utils/getColumnsOfData';

const Information = () => {
 const [data, setData] = useState({
  expenses: [
   {
    id: 'c7890123-8abc-1234-5678-abc456789abc',
    id_temporada: 'd2345678-8def-1234-5678-abc456789abc',
    id_insumo: 'b6789012-8def-1234-5678-abc456789abc',
    cantidad_usada: 20,
    precio_total: 1000,
    id_unidad_medida: 'e2345678-9def-1234-5678-abc456789012',
   },
  ],
  sales: [
   {
    id: 'b2345678-8def-1234-5678-abc456789abc',
    cantidad_vendida: 400,
    precio_total: 2000,
    fecha_venta: '2024-06-01T05:00:00.000Z',
    id_temporada: 'd2345678-8def-1234-5678-abc456789abc',
    observaciones: 'Venta exitosa',
    id_unidad_medida: 'e2345678-9def-1234-5678-abc456789012',
    precio_unitario: 100,
   },
  ],
  production: [
   {
    id: 'a1234567-8abc-1234-5678-abc456789def',
    nombre: 'productName',
    cantidad_recolectada: 500,
    fecha_recoleccion: '2024-05-01T05:00:00.000Z',
    id_temporada: 'd2345678-8def-1234-5678-abc456789abc',
    id_unidad_medida: 'e2345678-9def-1234-5678-abc456789012',
   },
  ],
  supplies: [
   {
    id: 'b6789012-8def-1234-5678-abc456789abc',
    nombre: 'Semillas de Maíz',
    cantidad_disponible: 200,
    fecha_ingreso: '2024-01-01T05:00:00.000Z',
    precio: 50,
    id_inventario: 'a5678901-8abc-1234-5678-abc456789abc',
    id_categoria: 'e3456789-8abc-1234-5678-abc456789def',
    id_unidad_medida: 'e2345678-9def-1234-5678-abc456789012',
   },
  ],
  activityManagements: [
   {
    id: 'd8901234-8def-1234-5678-abc456789abc',
    id_actividad: 'f4567890-8def-1234-5678-abc456789abc',
    id_temporada: 'd2345678-8def-1234-5678-abc456789abc',
    costo: 200,
    gasto_insumo_id: 'c7890123-8abc-1234-5678-abc456789abc',
   },
  ],
 });
 const [columns, setColums] = useState({
  expenses: [{ name: 'id', selector: (row) => row.id }],
  sales: [{ name: 'id', selector: (row) => row.id }],
  production: [{ name: 'id', selector: (row) => row.id }],
  supplies: [{ name: 'id', selector: (row) => row.id }],
  activityManagements: [{ name: 'id', selector: (row) => row.id }],
 });

 useEffect(() => {
    getInformation().then((dataDb) => {
     setData({dataDb
     });
    });
   }, []);

 useEffect(() => {
  const cols = getColumnsOfData(data);
  setColums(cols);
 }, []);

 return (
  <div style={{ display: 'flex' }}>
   <Sidebar />
   <main style={{ flex: 1, padding: '20px' }}>
    <header>
     <h1 id='title'>Información</h1>
    </header>

    <nav className='horizontal-nav'>
     <div className='nav-item'>
      <h2>Proyecto</h2>
      <div className='select-container'>
       <label htmlFor='proyect-select'></label>
       <select name='proyect' id='proyect-select'>
        <option value='andina'>Región Andina</option>
        <option value='caribe'>Región Caribe</option>
        <option value='pacifica'>Región Pacífica</option>
        <option value='amazonia'>Región Amazonia</option>
        <option value='orinoquia'>Región Orinoquia</option>
       </select>
      </div>
     </div>

     <div className='nav-item'>
      <h2>Cultivo</h2>
      <div className='select-container'>
       <label htmlFor='cultivo-select'></label>
       <select name='cultivo' id='cultivo-select'>
        <option value='Arroz'>Arroz</option>
        <option value='Mandarina'>Mandarina</option>
        <option value='Cacao'>Cacao</option>
        <option value='Cafe'>Café</option>
       </select>
      </div>
     </div>

     <div className='nav-item'>
      <h2>Temporada</h2>
      <div className='select-container'>
       <label htmlFor='Temporada'></label>
       <select name='Temporada' id='Temporada'>
        <option value='2024'>2024</option>
        <option value='2023'>2023</option>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
       </select>
      </div>
     </div>
    </nav>

    <br />
    <div className='table-container'>
     <h2 className='table_caption'>Gastos</h2>
     <br />
     <DataTable columns={columns.expenses} data={data.expenses} />
    </div>
    <br />

    <div className='table-container'>
     <h2 className='table_caption'>Ventas</h2>
     <br />
     <DataTable columns={columns.sales} data={data.sales} /> 
    </div>
    <br />


    <div className='table-container'>
     <h2 className='table_caption'>Producción</h2>
     <DataTable columns={columns.production} data={data.production} />
    </div>

    <br />

    <div className='table-container'>
     <h2 className='table_caption'>Insumos</h2>
     <DataTable columns={columns.supplies} data={data.supplies} />
    </div>

    <br />

    <div className='table-container'>
     <h2 className='table_caption'>Gestión de Actividades</h2>
     <DataTable columns={columns.activityManagements} data={data.activityManagements} />
    </div>

   </main>
  </div>
 );
};

export default Information;