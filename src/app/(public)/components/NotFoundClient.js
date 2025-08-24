// src/app/(public)/components/NotFoundClient.js
"use client";

import { useEffect } from 'react';

export default function NotFoundClient() {

    // Handles the preloader fade-out effect
    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            const timer = setTimeout(() => {
                preloader.style.transition = 'opacity 0.5s ease';
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 500);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, []);

    // This component renders the preloader, which is then removed by the useEffect hook.
    // The actual page content is in not-found.js to benefit from Server Rendering.
    return (
        <div id="preloader" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 99999, background: '#ffffff' }}>
            <div className="visaco-loader-inner">
                <div className="visaco-loader">
                    {[...Array(8)].map((_, i) => <span key={i} className="visaco-loader-item"></span>)}
                </div>
            </div>
        </div>
    );
}