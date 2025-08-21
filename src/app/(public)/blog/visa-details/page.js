// src/app/(public)/visa-details/page.js
// ... (imports remain the same)

import Breadcrumb from "../components/about-sections/Breadcrumb";
import VisaMainContent from "../components/visa-details-sections/VisaMainContent";
import dbConnect from '@/lib/dbconnect';
import PageContent from '@/models/PageContent';

async function getContent() {
    await dbConnect();
    const content = await PageContent.findOne({ pageIdentifier: 'visa-details' });
    return JSON.parse(JSON.stringify(content));
}

export default async function VisaDetailsPage() {
    const content = await getContent();
    // Now you can pass content.title, content.content, etc., to your components
    // Or render them directly here.
    return (
        <>
            <Breadcrumb title={content?.title || "Visa Details"} breadcrumbText="Visa" />
            
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    {/* Check if content exists before trying to render it */}
                    {content ? (
                        <VisaMainContent serverContent={content} />
                    ) : (
                        <p>Content not available. Please add it in the admin panel.</p>
                    )}
                </div>
            </div>
        </>
    );
}