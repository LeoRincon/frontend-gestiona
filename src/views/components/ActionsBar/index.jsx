import AddIcon from "../icons/AddIcon"
import SearchIcon from "../icons/SearchIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

import "./styles.css"

export default function ActionsBar({handleAddModal, handleEditModal, handleDeleteModal}){
    const iconProps={
        width:45,
        height:45,
        fill:"#000000" 
    }; 
    return(
        <section className="add-search-section">
            <div  onClick={handleAddModal} >
                <AddIcon {...iconProps} />
            </div>
            <div >
                <SearchIcon {...iconProps} />
            </div>
            <div onClick={handleEditModal}>
                <EditIcon {...iconProps} />
            </div>
            <div onClick={handleDeleteModal} >
                <DeleteIcon {...iconProps} />
            </div>
        </section>
    )
}