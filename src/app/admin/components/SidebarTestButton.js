"use client";

export default function SidebarTestButton() {
  const handleTestClick = () => {
    console.log('Test button clicked');
    const body = document.body;
    const sidebar = document.querySelector('.app-sidebar');
    
    console.log('Current body classes:', body.className);
    console.log('Sidebar element:', sidebar);
    
    if (body.classList.contains('sidebar-collapse')) {
      body.classList.remove('sidebar-collapse');
      body.classList.remove('sidebar-open');
      if (sidebar) sidebar.classList.remove('sidebar-collapse');
      console.log('Sidebar expanded via test button');
    } else {
      body.classList.add('sidebar-collapse');
      body.classList.add('sidebar-open');
      if (sidebar) sidebar.classList.add('sidebar-collapse');
      console.log('Sidebar collapsed via test button');
    }
    
    console.log('New body classes:', body.className);
  };

  return (
    <div className="mt-3">
      <button 
        id="test-sidebar-toggle" 
        className="btn btn-primary"
        onClick={handleTestClick}
      >
        Test Sidebar Toggle
      </button>
    </div>
  );
}
