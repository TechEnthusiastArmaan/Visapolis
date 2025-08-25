// src/app/admin/components/DynamicBreadcrumb.js
'use client'; // This is essential!

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook to get the current URL path

const DynamicBreadcrumb = () => {
    const pathname = usePathname();

    // Don't render the breadcrumb on the main dashboard page
    if (pathname === '/admin/dashboard') {
        return null;
    }

    // Create breadcrumb segments from the path
    const pathSegments = pathname.split('/').filter(segment => segment);

    // Function to capitalize the first letter of a string
    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className="page-header">
            {/* We'll use this container for a title and the breadcrumb */}
            
            {/* Generate a dynamic title from the last path segment */}
            <h3 className="page-title">
                {capitalize(pathSegments[pathSegments.length - 1].replace(/-/g, ' '))}
            </h3>

            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link href="/admin/dashboard">Dashboard</Link>
                    </li>
                    {pathSegments.slice(1).map((segment, index) => {
                        // Create the href for the current segment
                        const href = `/admin/${pathSegments.slice(1, index + 2).join('/')}`;
                        
                        // Check if it's the last segment in the path
                        const isLast = index === pathSegments.length - 2;

                        return isLast ? (
                            <li key={href} className="breadcrumb-item active" aria-current="page">
                                {capitalize(segment.replace(/-/g, ' '))}
                            </li>
                        ) : (
                            <li key={href} className="breadcrumb-item">
                                <Link href={href}>{capitalize(segment)}</Link>
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </div>
    );
};

export default DynamicBreadcrumb;