import TableRow from '../TableRow'; // Importa el componente TableRow desde la carpeta correcta
import "./styles.css"; // Asegúrate de que el archivo de estilos exista y se importe correctamente

const TableBody = () => (
  <tbody>
    {["0001", "0002", "0003", "0004", "0005"].map((id, index) => (
      <TableRow key={index} id={id} />
    ))}
  </tbody>
);

export default TableBody;
