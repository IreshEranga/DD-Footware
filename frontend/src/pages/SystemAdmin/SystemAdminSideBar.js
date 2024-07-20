

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SystemAdminSideBar.css';
// import { BiSolidLogOut } from 'react-icons/bi';
// import { FiMenu } from 'react-icons/fi';
// import { IoClose } from 'react-icons/io5';

// const SystemAdminSideBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//         <div className="toggle-button" onClick={toggleSidebar}>
//           {isOpen ? <FiMenu /> : <IoClose />}
//         </div>
//         <div className="sidebar-content">
//           <div className="menu-item" onClick={() => navigate('/systemadmin/products')}>
//             Products
//           </div>
//           <div className="menu-item" onClick={() => navigate('/systemadmin/outlets')}>
//             Outlets
//           </div>
//         </div>
//         <div className="menu-item logout" onClick={handleLogout}>
//           <BiSolidLogOut /> Logout
//         </div>
//       </div>
//       <div className={`main-content ${isOpen ? 'shifted' : ''}`}>
//         {/* Other dashboard content */}
//         <h1>System Admin Dashboard</h1>
//         <p>Welcome to the System Admin Dashboard. Here you can manage products and outlets.</p>
//       </div>
//     </>
//   );
// };

// export default SystemAdminSideBar;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SystemAdminSideBar.css';
import { BiSolidLogOut } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const SystemAdminSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <IoClose /> : <FiMenu />}
        </div>
        <div className="sidebar-content">
          <div className="menu-item" onClick={() => navigate('/systemadmin/products')}>
            Products
          </div>
          <div className="menu-item" onClick={() => navigate('/systemadmin/outlets')}>
            Outlets
          </div>
          <div className="menu-item" onClick={() => navigate('/systemadmin/orders')}>
            Orders
          </div>
        </div>
        <div className="menu-item logout" onClick={handleLogout}>
          <BiSolidLogOut /> Logout
        </div>
      </div>
    </>
  );
};

export default SystemAdminSideBar;
