import DataTable from 'react-data-table-component';

const columns = [
 {
  name: 'ID cultivo',
  selector: (row) => row.id,
 },
 {
  name: 'Nombre',
  selector: (row) => row.nombre,
 },
 {
  name: 'Tipo de siembra',
  selector: (row) => row.tipo_siembra,
 },
 {
  name: 'Fecha de inicio	',
  selector: (row) => row.fecha_inicio,
 },
 {
  name: 'Área del terreno	',
  selector: (row) => row.area_terreno,
 },
];


import './styles.css';

const CultivoTable = ({dataTable}) => {
  return (
    <DataTable columns={columns} data={dataTable} onSelectedRowsChange={(row) => console.log(row)} selectableRows/>
  )
}


export default CultivoTable;
