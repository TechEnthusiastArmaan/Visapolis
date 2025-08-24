// src/app/visa-details/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import VisaSidebar from "../components/visa-details-sections/VisaDetailsSidebar";
import VisaMainContent from "../components/visa-details-sections/VisaMainContent";

const pageTitle = 'Visa Details';

export const metadata = {
  // 2. Use the variable for the page's metadata title
  title: pageTitle,
  description: 'Learn about visa requirements, career opportunities, and the application process with Visaco.',
};

export default function VisaDetailsPage() {
    return (
        <>
            <Breadcrumb title={pageTitle} breadcrumbText="Visa" />

            {/* === START: NEW DYNAMIC TITLE SECTION === */}
            <div className="container text-center py-5">
                <h1 className="wow fadeInUp" style={{ animationDelay: '300ms', animationName: 'fadeInUp' }}>
                    {/* 3. Use the same variable for the visible H1 title */}
                    {pageTitle}
                </h1>
            </div>
            {/* === END: NEW DYNAMIC TITLE SECTION === */}
            
            {/* 
              The 'pt-0' class is added here to remove the top padding 
              from the main content section, creating better spacing with the new title above.
            */}
            <div className="services-details-area overflow-hidden default-padding pt-0">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                <VisaMainContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}