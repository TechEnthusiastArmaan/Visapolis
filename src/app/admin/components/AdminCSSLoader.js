// src/app/admin/components/AdminCSSLoader.js
"use client";

import { useEffect, useState } from 'react';

export default function AdminCSSLoader() {
  const [cssLoaded, setCssLoaded] = useState(false);

  useEffect(() => {
    // This function dynamically loads a CSS file into the document's head.
    const loadCSS = (href) => {
      return new Promise((resolve, reject) => {
        // Prevent re-loading the same stylesheet.
        if (document.querySelector(`link[href="${href}"]`)) {
          resolve();
          return;
        }

        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load CSS: ${href}`));
        document.head.appendChild(link);
      });
    };

    const loadAllCSS = async () => {
      try {
        // The order of loading is important. AdminLTE depends on Bootstrap.
        // 1. FontAwesome for icons.
        await loadCSS('/vendor/css/all.min.css');
        // 2. Bootstrap CSS.
        await loadCSS('/vendor/css/bootstrap.min.css');
        // 3. The main AdminLTE stylesheet.
        await loadCSS('/vendor/css/adminlte.min.css');
        
        // Once all CSS is loaded, we can hide the loading indicator.
        setCssLoaded(true);

      } catch (error) {
        console.error("Failed to load one or more AdminLTE CSS files:", error);
        // Even if there's an error, we hide the loader to not block the page.
        setCssLoaded(true);
      }
    };

    loadAllCSS();

  }, []); // The empty dependency array ensures this effect runs only once on mount.

  // While CSS is loading, we show a full-screen loading spinner.
  // This prevents the user from seeing a flash of unstyled content (FOUC).
  if (!cssLoaded) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#f4f6f9',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          border: '5px solid #ddd',
          borderTop: '5px solid #007bff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // Once CSS is loaded, this component renders nothing.
  return null;
}
