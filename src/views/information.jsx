import './styles/information.css';
import Sidebar from './components/Sidebar';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { getExpenses } from '../services/informationServices';
import { getColumnsOfData } from '../utils/getColumnsOfData';

const columnsVentas = [
 { name: '#', selector: (row) => row.id },
 { name: 'Cantidad Vendida', selector: (row) => row.cantidad_vendida },
 { name: 'Precio Total', selector: (row) => row.precio_total },
 { name: 'Fecha Venta', selector: (row) => row.fecha_venta },
 { name: 'Id Temporada', selector: (row) => row.id_temporada },
 { name: 'Observaciones', selector: (row) => row.observaciones },
 { name: 'Id Unidad Medida', selector: (row) => row.id_unidad_medida },
];
const dataVentas = [
 {
  id: 1,
  cantidad_vendida: 10,
  precio_total: 1000,
  fecha_venta: '2023-01-01',
  id_temporada: 1,
  observaciones: 'Primera venta',
  id_unidad_medida: 1,
 },
 {
  id: 2,
  cantidad_vendida: 15,
  precio_total: 1500,
  fecha_venta: '2023-01-02',
  id_temporada: 1,
  observaciones: 'Segunda venta',
  id_unidad_medida: 2,
 },
 {
  id: 3,
  cantidad_vendida: 20,
  precio_total: 2000,
  fecha_venta: '2023-01-03',
  id_temporada: 2,
  observaciones: 'Tercera venta',
  id_unidad_medida: 1,
 },
 {
  id: 4,
  cantidad_vendida: 25,
  precio_total: 2500,
  fecha_venta: '2023-01-04',
  id_temporada: 2,
  observaciones: 'Cuarta venta',
  id_unidad_medida: 2,
 },
];

const columnsProduccion = [
 { name: '#', selector: (row) => row.id },
 { name: 'Cantidad Recolectada', selector: (row) => row.cantidad_recolectada },
 { name: 'Fecha Recolección', selector: (row) => row.fecha_recoleccion },
 { name: 'Id Temporada', selector: (row) => row.id_temporada },
 { name: 'Id Unidad Medida', selector: (row) => row.id_unidad_medida },
];

const dataProduccion = [
 {
  id: 1,
  cantidad_recolectada: 100,
  fecha_recoleccion: '2023-01-05',
  id_temporada: 1,
  id_unidad_medida: 1,
 },
 {
  id: 2,
  cantidad_recolectada: 200,
  fecha_recoleccion: '2023-01-06',
  id_temporada: 1,
  id_unidad_medida: 2,
 },
 {
  id: 3,
  cantidad_recolectada: 150,
  fecha_recoleccion: '2023-01-07',
  id_temporada: 2,
  id_unidad_medida: 1,
 },
 {
  id: 4,
  cantidad_recolectada: 250,
  fecha_recoleccion: '2023-01-08',
  id_temporada: 2,
  id_unidad_medida: 2,
 },
];

const columnsInsumos = [
 { name: '#', selector: (row) => row.id },
 { name: 'Nombre Insumo', selector: (row) => row.nombre_insumo },
 { name: 'Cantidad Disponible', selector: (row) => row.cantidad_disponible },
 { name: 'Fecha Ingreso', selector: (row) => row.fecha_ingreso },
 { name: 'Precio Insumo', selector: (row) => row.precio_insumo },
 { name: 'Id Inventario', selector: (row) => row.id_inventario },
 { name: 'Id Categoria', selector: (row) => row.id_categoria },
 { name: 'Id Unidad Medida', selector: (row) => row.id_unidad_medida },
];

const dataInsumos = [
 {
  id: 1,
  nombre_insumo: 'Fertilizante',
  cantidad_disponible: 100,
  fecha_ingreso: '2021-10-10',
  precio_insumo: 100000,
  id_inventario: 1,
  id_categoria: 1,
  id_unidad_medida: 1,
 },
 {
  id: 2,
  nombre_insumo: 'Pesticida',
  cantidad_disponible: 50,
  fecha_ingreso: '2021-11-10',
  precio_insumo: 50000,
  id_inventario: 2,
  id_categoria: 2,
  id_unidad_medida: 2,
 },
 {
  id: 3,
  nombre_insumo: 'Semillas',
  cantidad_disponible: 200,
  fecha_ingreso: '2021-12-10',
  precio_insumo: 200000,
  id_inventario: 3,
  id_categoria: 3,
  id_unidad_medida: 1,
 },
 {
  id: 4,
  nombre_insumo: 'Herbicida',
  cantidad_disponible: 30,
  fecha_ingreso: '2022-01-10',
  precio_insumo: 30000,
  id_inventario: 4,
  id_categoria: 4,
  id_unidad_medida: 2,
 },
];

const columnsActividades = [
 { name: '#', selector: (row) => row.id },
 { name: 'Id Actividad', selector: (row) => row.id_actividad },
 { name: 'Id Temporada', selector: (row) => row.id_temporada },
 { name: 'Costo', selector: (row) => row.costo },
 { name: 'Gasto Insumo Id', selector: (row) => row.gasto_insumo_id },
];

const dataActividades = [
 {
  id: 1,
  id_actividad: 101,
  id_temporada: 1,
  costo: 1000,
  gasto_insumo_id: 1,
 },
 {
  id: 2,
  id_actividad: 102,
  id_temporada: 1,
  costo: 2000,
  gasto_insumo_id: 2,
 },
 {
  id: 3,
  id_actividad: 103,
  id_temporada: 2,
  costo: 1500,
  gasto_insumo_id: 3,
 },
 {
  id: 4,
  id_actividad: 104,
  id_temporada: 2,
  costo: 2500,
  gasto_insumo_id: 4,
 },
];

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
  getExpenses().then((dataDb) => {
   setData({
    ...data,
    expenses: dataDb,
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
     <DataTable columns={columnsVentas} data={dataVentas} />
    </div>
    <br />

    <div className='table-container'>
     <h2 className='table_caption'>Producción</h2>
     <br />
     <DataTable columns={columnsProduccion} data={dataProduccion} />
    </div>
    <br />

    <div className='table-container'>
     <h2 className='table_caption'>Insumos</h2>
     <br />
     <DataTable columns={columnsInsumos} data={dataInsumos} />
    </div>
    <br />

    <div className='table-container'>
     <h2 className='table_caption'>Actividades</h2>
     <br />
     <DataTable columns={columnsActividades} data={dataActividades} />
    </div>
    <br />
   </main>
  </div>
 );
};

export default Information;
