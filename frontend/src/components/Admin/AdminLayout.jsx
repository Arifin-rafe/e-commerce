import React from 'react'

const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
        {/* Mobile toggle button */}
    </div>
  )
}

export default AdminLayout