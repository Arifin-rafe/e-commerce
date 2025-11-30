
import { useState } from "react";
import { FaBars } from "react-icons/fa";
const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
        {/* Mobile toggle button */}
        <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
            <button onClick={toggleSidebar}>
                <FaBars size={24} />
            </button>
        </div>
    </div>
  )
}

export default AdminLayout