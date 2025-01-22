import DataTable from 'react-data-table-component';

const columns = [
 {
  name: '#',
  selector: (row) => row.id,
 },
 {
  name: 'Nombre',
  selector: (row) => row.nombre,
 },
 {
  name: 'Correo',
  selector: (row) => row.correo,
 },
 {
  name: 'Rol',
  selector: (row) => row.rol,
 },
 {
  name: 'Permisos',
  selector: (row) => row.permisos,
 }
];

const data = [
 {
  id: 1,
  nombre: 'Beetlejuice',
  correo: 'example@.com',
  rol: 'Admin',
  permisos: 'Lector',
 },
 {
  id: 2,
  nombre: 'Beetlejuice',
  correo: 'example@.com',
  rol: 'Admin',
  permisos: 'Lector',
 },
];

import './styles.css';

const AdminUser = ({onClickAddButton }) => {
 return (
  <section className='admin-user'>
   <header className='admin-user__header'>
    <h1>Administrar usuarios</h1>
   </header>
   <DataTable columns={columns} data={data} onSelectedRowsChange={(row) => console.log(row)} selectableRows/>
   <button onClick={onClickAddButton} type='button' className='add-user-button'>
    Agregar usuario
   </button>
  </section>
 );
};

export default AdminUser;
