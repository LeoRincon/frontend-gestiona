import EditIcon from "../icons/EditIcon"
import DeleteIcon from "../icons/DeleteIcon"
import ArrowBackIcon from "../icons/ArrowBackIcon"
import ArrowForwardIcon from "../icons/ArrowForwardIcon"

import "./styles.css"

export default function TableInventory(){
    const iconProps={
        width:25,
        height:25,
        fill:"#193c32"
    };
    const arrowIconProps={
        width:17,
        height:18,
        fill:"#000000"
    };
    return(
            <table className="inventory-table"> 
                <thead>
                    <tr>
                        <th>ID insumo</th>
                        <th>Nombre</th>
                        <th>Cantidad</th>
                        <th>Fecha ingreso</th>
                        <th>Unidad de medida</th>
                        <th>Precio insumo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="ID">0001</td>
                        <td data-label="Nombre">XXXXXXXXX</td>
                        <td data-label="Cantidad">XXXXXXXXX</td>
                        <td data-label="Fecha ingreso">XXXXXXXXX</td>
                        <td data-label="Unidad de medida">XXXXXXXXX</td>
                        <td data-label="Precio insumo">XXXXXXXXX</td>
                        <td className="actions" data-label="Acciones">
                            <a href="#">
                                <EditIcon {...iconProps} />
                            </a>
                            <a href="#">
                                <DeleteIcon {...iconProps} />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="ID">0002</td>
                        <td data-label="Nombre">XXXXXXXXX</td>
                        <td data-label="Cantidad">XXXXXXXXX</td>
                        <td data-label="Fecha ingreso">XXXXXXXXX</td>
                        <td data-label="Unidad de medida">XXXXXXXXX</td>
                        <td data-label="Precio insumo">XXXXXXXXX</td>
                        <td className="actions" data-label="Acciones">
                            <a href="#">
                                <EditIcon {...iconProps} />
                            </a>
                            <a href="#">
                                <DeleteIcon {...iconProps} />
                            </a>
                        </td>
                    </tr>
                </tbody>
                <tfoot> 
                    <tr>
                        <td colSpan="7">
                            <a href="#">
                                <ArrowBackIcon {...arrowIconProps} />
                            </a>
                            <strong>
                                1-10
                            </strong>
                            <a href="#">
                                <ArrowForwardIcon {...arrowIconProps} />
                            </a>
                        </td>
                    </tr>
                </tfoot>
            </table>
    )
}