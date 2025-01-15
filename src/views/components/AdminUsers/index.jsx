import "./styles.css";

const AdminUser = () => {
  return (
    <section className="admin-user">
      <header className="admin-user__header">
        <h1>Administrar usuarios</h1>
      </header>
      <table className="admin-user__table">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Permisos</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Leonardo Rincón</td>
            <td>Example@example.com</td>
            <td>Administrador</td>
            <td>Lector</td>
            <td className="actions">
              <button className="edit-button">✏️</button>
              <button className="delete-button">🗑️</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mario Rincón</td>
            <td>Example@example.com</td>
            <td>User</td>
            <td>user</td>
            <td className="actions">
              <button className="edit-button">✏️</button>
              <button className="delete-button">🗑️</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" className="add-user-button">Agregar usuario</button>
    </section>
  );
};

export default AdminUser;


