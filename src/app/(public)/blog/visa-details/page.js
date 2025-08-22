// src/app/(public)/visa-details/page.js

import Breadcrumb from "../../../components/about-sections/Breadcrumb";
import VisaMainContent from "../../../components/visa-details-sections/VisaMainContent";
import dbConnect from "../../../lib/dbconnect";
import PageContent from "../../../models/PageContent";

async function getContent() {
    await dbConnect();
    const content = await PageContent.findOne({ pageIdentifier: 'visa-details' });
    return JSON.parse(JSON.stringify(content));
}

// Update generateMetadata to be dynamic
export async function generateMetadata() {
    const content = await getContent();
    return {
        title: content?.title || 'Visa Details',
        description: content?.content?.substring(0, 160) || 'Learn about visa requirements, career opportunities, and the application process.',
    };
}

export default async function VisaDetailsPage() {
    const content = await getContent();

    // If there's no content in the DB yet, we can show a placeholder or nothing.
    if (!content) {
        return (
            <>
                <Breadcrumb title="Visa Details" breadcrumbText="Visa" />
                <div className="container default-padding text-center">
                    <h2>Content Coming Soon</h2>
                    <p>This page is currently being updated. Please check back later.</p>
                </div>
            </>
        );
    }
    
    return (
        <>
            <Breadcrumb title={content.title} breadcrumbText="Visa" />
            
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row justify-content-center">
                            <div className="col-xl-8 col-lg-10">
                                {/* Pass the fetched content as a prop to the client component */}
                                <VisaMainContent content={content} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}