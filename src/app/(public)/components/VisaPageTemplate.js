// src/app/(public)/components/VisaPageTemplate.js
import Breadcrumb from "./about-sections/Breadcrumb";

// This component takes props to make it reusable
export default function VisaPageTemplate({ title, breadcrumbText, children }) {
    return (
        <>
            <Breadcrumb title={title} breadcrumbText={breadcrumbText} />

            <div className="container text-center py-5">
                <h1 className="wow fadeInUp" style={{ animationDelay: '300ms', animationName: 'fadeInUp' }}>
                    {title}
                </h1>
            </div>
            
            <div className="services-details-area overflow-hidden default-padding pt-0">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                {/* The 'children' prop is where the unique content will go */}
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}