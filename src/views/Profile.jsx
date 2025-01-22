import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile"; 
import AdminUsers from "./components/AdminUsers";   
import AddUserModal from "./components/AddUserModal"; 
import EditUserModal from "./components/EditUserModal"; 
import { useRef } from "react";


import "./styles/profile.css"
import ActionsAdminUsers from "./components/ActionsAdminUsers";

export default function Profile() {
  const AddUserModalreF = useRef(null); 
  const EditUserModalreF = useRef(null);

  const handleOpenAddModal = () => { 
    AddUserModalreF.current.showModal();
  }
  const handleCloseAddModal = () => {
    AddUserModalreF.current.close();
  }
  const handleOpenEditModal = () => {
    EditUserModalreF.current.showModal();
  }
  const handleCloseEditModal = () => {
    EditUserModalreF.current.close();
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <header className="profile-header">
        </header>
        <main>
          <UserProfile />
          <ActionsAdminUsers onClickOpenEditModal={handleOpenEditModal} />   
          <AdminUsers onClickAddButton={handleOpenAddModal}/>
           <AddUserModal onClose={handleCloseAddModal} ref= {
              AddUserModalreF 
           }/>
           <EditUserModal onClose={handleCloseEditModal} ref= {
            EditUserModalreF
           }/>
        </main>
      </div>
    </div>
  );
}

console.log(Sidebar);
