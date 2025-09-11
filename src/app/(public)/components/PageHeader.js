// src/app/(public)/components/PageHeader.js
import Link from 'next/link';

// This is a reusable Server Component for inner page headers.
export default function PageHeader({ title, parentPage, parentPageUrl }) {
    return (
        <div 
            className="breadcrumb-area bg-cover" 
            style={{ 
                backgroundImage: 'url(/assets/img/banner/11.jpeg)', // A generic background image
                backgroundPosition: 'center center'
            }}
        >
            <div className="container">
                <div className="breadcrumb-item text-center">
                    <h2 className="title">{title}</h2>
                    <ul className="breadcrumb">
                        <li>
                            <Link href="/">
                                <i className="fas fa-home"></i> Home
                            </Link>
                        </li>
                        
                        {parentPage && parentPageUrl && (
                            <>
                                <li className="breadcrumb-separator">
                                    <i className="fas fa-chevron-right"></i>
                                </li>
                                <li>
                                    <Link href={parentPageUrl}>{parentPage}</Link>
                                </li>
                            </>
                        )}
                        
                        <li className="breadcrumb-separator">
                            <i className="fas fa-chevron-right"></i>
                        </li>
                        <li className="active">{title}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}