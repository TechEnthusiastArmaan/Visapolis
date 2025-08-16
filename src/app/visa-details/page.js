// src/app/visa-details/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import VisaSidebar from "../components/visa-details-sections/VisaDetailsSidebar";
import VisaMainContent from "../components/visa-details-sections/VisaMainContent";

export const metadata = {
  title: 'Visa Details',
  description: 'Learn about visa requirements, career opportunities, and the application process with Visaco.',
};

export default function VisaDetailsPage() {
    return (
        <>
            <Breadcrumb title="Visa Details" breadcrumbText="Visa" />
            
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            {/* Main Content Column */}
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                {/* This is a Client Component to handle script initializations */}
                                <VisaMainContent />
                            </div>

                            {/* Sidebar Column */}
                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <VisaSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}