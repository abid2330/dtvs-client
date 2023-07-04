import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header';
import Menu from './Components/Menu';

const DashboardLayout = () => {
  const [sidebar, setsidebar] = useState(false);

  const showSidebar = () => setsidebar(!sidebar);
  return (
    <div>
      <div id='wrapper'>
        <Menu sidebar={sidebar} />
        <div id='content-wrapper' className='d-flex flex-column'>
          {/* Main Content */}
          <div id='content'>
            <Header showSidebar={showSidebar} />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
