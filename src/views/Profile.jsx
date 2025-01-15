import Sidebar from "./components/Sidebar";
import UserProfile from "./components/UserProfile"; 
import AdminUsers from "./components/AdminUsers";   
import AddUserModal from "./components/AddUserModal"; 
import EditUserModal from "./components/EditUserModal"; 

import "./styles/profile.css"

export default function Profile() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
        <header className="profile-header">
        </header>
        <main>
          <UserProfile />
          <AdminUsers />
          <AddUserModal />
          <EditUserModal />
        </main>
      </div>
    </div>
  );
}

console.log(Sidebar);
