// src/app/layout.js

import { Analytics } from "@vercel/analytics/react"; // Correct import path for Analytics
import Script from 'next/script'; // <-- STEP 1: Import the Script component
import "./globals.css";

export const metadata = {
  title: "Visapolis",
  description: "Website and Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*
          The commented-out links for AdminLTE are no longer needed
          because your admin layout now handles its own specific stylesheets.
          Keeping this area clean is good practice.
        */}
        <link rel="stylesheet" href="/assets/css/font-awesome.min.css" />

      </head>
      <body>
        {children}
        <Analytics />

        {/* --- STEP 2: ADD THE SWEETALERT SCRIPT TAG HERE --- */}
        {/*
          By placing this script in the root layout, the 'swal' function becomes
          globally available on both your public pages (like Contact) and your
          admin panel pages. The 'lazyOnload' strategy is efficient as it
          loads the script after the page becomes interactive.
        */}
        <Script 
          src="https://unpkg.com/sweetalert/dist/sweetalert.min.js" 
          strategy="lazyOnload" 
        />

      </body>
    </html>
  );
}