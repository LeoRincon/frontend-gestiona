import EditIcon from "../icons/EditIcon"
import DeleteIcon from "../icons/DeleteIcon"
import ArrowBackIcon from "../icons/ArrowBackIcon"
import ArrowForwardIcon from "../icons/ArrowForwardIcon"

import "./styles.css"

export default function TableSeason(){
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
        <table className="season-table"> 
                <thead>
                    <tr>
                        <th>Id temporada</th>
                        <th>Nombre</th>
                        <th>Duración</th>
                        <th>Fecha inicio</th>
                        <th>Fecha final</th>
                        <th>Id cultivo</th>
                        <th>Id novedades</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="Id temporada">XXXXXXX-1</td>
                        <td data-label="Nombre">XXXXXXXXX</td>
                        <td data-label="Duración">XXXXXXXXX</td>
                        <td data-label="Fecha inicio">XXXXXXXXX</td>
                        <td data-label="Fecha final">XXXXXXXXX</td>
                        <td data-label="Id cultivo">XXXXXXXXX</td>
                        <td data-label="Id novedades">XXXXXXXXX</td>
                        <td className="actions" data-label="Acciones">
                            <EditIcon width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />
                            <DeleteIcon width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />
                        </td>
                    </tr>
                    <tr>
                        <td data-label="Id temporada">XXXXXXX-2</td>
                        <td data-label="Nombre">XXXXXXXXX</td>
                        <td data-label="Duración">XXXXXXXXX</td>
                        <td data-label="Fecha inicio">XXXXXXXXX</td>
                        <td data-label="Fecha final">XXXXXXXXX</td>
                        <td data-label="Id cultivo">XXXXXXXXX</td>
                        <td data-label="Id novedades">XXXXXXXXX</td>
                        <td className="actions" data-label="Acciones">
                            <EditIcon width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />
                            <DeleteIcon width={iconProps.width} height={iconProps.height} fill={iconProps.fill} />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="8">
                            <ArrowBackIcon width={arrowIconProps.width} height={arrowIconProps.height} fill={arrowIconProps.fill} />
                            <strong>
                                1-10
                            </strong>
                            <ArrowForwardIcon width={arrowIconProps.width} height={arrowIconProps.height} fill={arrowIconProps.fill} />
                        </td>
                    </tr>
                </tfoot>
            </table>
    )
}