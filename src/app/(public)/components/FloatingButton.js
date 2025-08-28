// src/app/(public)/components/FloatingButton.js
'use client'; // This is an interactive UI element

import Link from 'next/link';
import './FloatingButton.css'; // We will create this CSS file next

export default function FloatingButton() {
    return (
        <Link href="/appointment" className="floating-consultation-button">
            {/* The SVG element handles the revolving text */}
            <svg className="revolving-text" viewBox="0 0 150 150">
                {/* 
                  1. Define an invisible circular path. 
                  The text will follow this path.
                */}
                <defs>
                    <path 
                        id="circlePath" 
                        d="M 75, 75 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                    />
                </defs>

                {/* 
                  2. Use the <textPath> element to place text onto the path.
                  We repeat the text to ensure it looks continuous as it rotates.
                */}
                <text>
                    <textPath href="#circlePath">
                        Book  a  Consultation &nbsp;
                    </textPath>
                </text>
            </svg>

            {/* The Icon in the center */}
            <div className="center-icon">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="40" 
                    height="40" 
                    fill="currentColor" 
                    className="bi bi-book" 
                    viewBox="0 0 16 16"
                >
                  <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.746c-.917-.35-2.107-.69-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105-1.3-.13-2.732.01-3.717.858z"/>
                </svg>
            </div>
        </Link>
    );
}