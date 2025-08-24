// src/app/admin/components/AdminLTEClient.js
"use client";

import { useEffect } from 'react';
import Script from 'next/script';

export default function AdminLTEClient() {
  useEffect(() => {
    // Add essential AdminLTE classes to the body tag
    document.body.classList.add("sidebar-mini", "layout-fixed");

    const initializeAdminLTE = async () => {
        try {
            // This ensures jQuery is loaded before we try to use it
            if (window.jQuery) {
                // These imports load the necessary JavaScript for AdminLTE's functionality
                await import('bootstrap/dist/js/bootstrap.bundle.min.js');
                await import('admin-lte/dist/js/adminlte.min.js');
                
                // Initialize AdminLTE after scripts are loaded
                if (window.AdminLTE) {
                    // Initialize all AdminLTE components
                    window.AdminLTE.init();
                    console.log("AdminLTE scripts initialized successfully.");
                }
                
                // Add click handler for sidebar toggle
                const toggleButton = document.querySelector('[data-widget="pushmenu"]');
                if (toggleButton) {
                    toggleButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        document.body.classList.toggle('sidebar-collapse');
                    });
                }
            }
        } catch (error) {
            console.error("Failed to initialize AdminLTE scripts:", error);
        }
    };

    // We check periodically for jQuery to be loaded by the <Script> component.
    // Once it's available, we initialize the rest of the AdminLTE scripts.
    const interval = setInterval(() => {
        if (window.jQuery) {
            clearInterval(interval);
            initializeAdminLTE();
        }
    }, 100);

    // Cleanup function to remove the classes when the component unmounts
    return () => {
      document.body.classList.remove("sidebar-mini", "layout-fixed");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
        {/* Load jQuery before any other scripts that depend on it */}
        <Script src="/vendor/js/jquery.min.js" strategy="beforeInteractive" />
    </>
  );
}
