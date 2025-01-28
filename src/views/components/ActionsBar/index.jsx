import AddIcon from "../icons/AddIcon"
import SearchIcon from "../icons/SearchIcon";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import CloseIcon from  "../icons/CloseIcon"

import "./styles.css"

export default function ActionsBar({handleAddModal, handleEditModal, handleDeleteModal, handleSearchModal,dataSearch,setDataSearch}){
    const iconProps={
        width:45,
        height:45,
        fill:"#000000" 
    }; 
    const deleteSearch=()=>setDataSearch(null)
    return(
        <section className="add-search-section">
            {dataSearch !== null && 
            <div  onClick={deleteSearch} >
                <CloseIcon {...iconProps} />
            </div>}
            <div  onClick={handleAddModal} >
                <AddIcon {...iconProps} />
            </div>
            <div onClick={handleSearchModal} >
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