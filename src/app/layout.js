// src/app/layout.js
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Visapolis",
  description: "Website and Admin Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* These links MUST be here to load the styles */}
        {/* <link rel="stylesheet" href="/vendor/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/vendor/css/all.min.css" />
        <link rel="stylesheet" href="/vendor/css/adminlte.min.css" /> */}
      </head>
      <body>
        {children}
        <Analytics/>
      </body>
    </html>
  );
}