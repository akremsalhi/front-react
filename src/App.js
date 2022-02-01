import React, { useEffect, useState } from 'react';
import {
  Route, Switch, useLocation
} from 'react-router-dom';
import './css/style.scss';
// Import pages
import Dashboard from './pages/Dashboard';
import Header from './partials/Header';
import Sidebar from './partials/Sidebar';



function App() {

  const location = useLocation();
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>

      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className='px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto'>

            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
            </Switch>
          </main>

        </div>
      </div>
    </>
  );
}

export default App;
