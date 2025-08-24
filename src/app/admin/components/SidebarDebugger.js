"use client";

import { useState, useEffect } from 'react';

export default function SidebarDebugger() {
  const [debugInfo, setDebugInfo] = useState({
    bodyClasses: '',
    sidebarElement: null,
    toggleButton: null,
    cssLoaded: false
  });

  useEffect(() => {
    const updateDebugInfo = () => {
      const body = document.body;
      const sidebar = document.querySelector('.app-sidebar');
      const toggleBtn = document.querySelector('[data-bs-toggle="sidebar"]');
      
      // Check if CSS is loaded
      const adminlteCSS = document.querySelector('link[href*="adminlte.min.css"]');
      const bootstrapCSS = document.querySelector('link[href*="bootstrap.min.css"]');
      
      setDebugInfo({
        bodyClasses: body.className,
        sidebarElement: sidebar ? 'Found' : 'Not found',
        toggleButton: toggleBtn ? 'Found' : 'Not found',
        cssLoaded: !!(adminlteCSS && bootstrapCSS)
      });
    };

    // Update immediately
    updateDebugInfo();
    
    // Update every second
    const interval = setInterval(updateDebugInfo, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const testToggle = () => {
    const body = document.body;
    const sidebar = document.querySelector('.app-sidebar');
    
    console.log('Manual toggle test');
    console.log('Current body classes:', body.className);
    console.log('Sidebar element:', sidebar);
    
    if (body.classList.contains('sidebar-collapse')) {
      body.classList.remove('sidebar-collapse');
      body.classList.remove('sidebar-open');
      if (sidebar) sidebar.classList.remove('sidebar-collapse');
      console.log('Sidebar expanded manually');
    } else {
      body.classList.add('sidebar-collapse');
      body.classList.add('sidebar-open');
      if (sidebar) sidebar.classList.add('sidebar-collapse');
      console.log('Sidebar collapsed manually');
    }
    
    // Update debug info
    setTimeout(() => {
      setDebugInfo(prev => ({
        ...prev,
        bodyClasses: body.className
      }));
    }, 100);
  };

  return (
    <div className="mt-3 p-3 bg-warning rounded">
      <h6>Sidebar Debug Information:</h6>
      <div className="row">
        <div className="col-md-6">
          <p><strong>Body Classes:</strong> <code>{debugInfo.bodyClasses || 'None'}</code></p>
          <p><strong>Sidebar Element:</strong> <span className="badge bg-secondary">{debugInfo.sidebarElement}</span></p>
          <p><strong>Toggle Button:</strong> <span className="badge bg-secondary">{debugInfo.toggleButton}</span></p>
          <p><strong>CSS Loaded:</strong> <span className={`badge ${debugInfo.cssLoaded ? 'bg-success' : 'bg-danger'}`}>{debugInfo.cssLoaded ? 'Yes' : 'No'}</span></p>
        </div>
        <div className="col-md-6">
          <button 
            className="btn btn-sm btn-outline-primary me-2"
            onClick={testToggle}
          >
            Manual Toggle
          </button>
          <button 
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              console.log('Current page state:');
              console.log('Body:', document.body);
              console.log('Sidebar:', document.querySelector('.app-sidebar'));
              console.log('Toggle button:', document.querySelector('[data-bs-toggle="sidebar"]'));
              console.log('All CSS links:', document.querySelectorAll('link[rel="stylesheet"]'));
            }}
          >
            Log State
          </button>
        </div>
      </div>
    </div>
  );
}
