// src/app/admin/components/AdminFooter.js
export default function AdminFooter() {
  return (
    // Use "main-footer" instead of "app-footer"
    <footer className="main-footer">
      <div className="float-end d-none d-sm-inline">
        Version 4.0
      </div>
      <strong>Copyright &copy; 2024-2025 <a href="#">Your Company</a>.</strong> All rights reserved.
    </footer>
  );
}