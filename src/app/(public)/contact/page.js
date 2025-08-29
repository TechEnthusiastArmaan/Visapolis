// src/app/contact/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import ContactForm from "../components/contact-sections/ContactForm";
import LocationTabs from "../components/contact-sections/LocationTabs";
// import PageHeader from "../components/PageHeader"; // It's better to use your consistent PageHeader

// --- STEP 1: Import your data fetching helper ---
import { getCachedSiteSettings } from "@/lib/data";

// SEO metadata for the Contact Us page
export const metadata = {
  title: 'Contact Us',
  description: 'Have questions? Get in touch with our team in New York, Paris, Dubai, or China for expert visa and immigration consulting.',
};

export default async function ContactPage() {
    // --- STEP 3: Fetch the settings on the server ---
    const settings = await getCachedSiteSettings();    // This is the Server Component for the Contact page.
    // It assembles the different sections of the page.
    return (
        <>
            <Breadcrumb title="Contact Us" breadcrumbText="Contact" />
            
            {/* Start Contact Area */}
            <div className="contact-style-one-area default-padding">
                <div className="container">
                    <div className="contact-style-one-items">
                        <div className="row align-center">
                            <div className="col-lg-7 pr-60 pr-md-15 pr-xs-15">
                                {/* The Location Map with Tabs is a client component for interactivity */}
                                <LocationTabs />
                            </div>
                            <div className="col-lg-5">
                                {/* The Form is a client component to handle user input */}
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Contact Area */}

            {/* Start Map */}
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                    {settings?.googleMapsUrl ? (
                        <iframe 
                            src={settings.googleMapsUrl}
                            style={{ border: 0, width: '100%', height: '400px' }} 
                            allowFullScreen="" 
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    ) : (
                        <div style={{ padding: '80px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
                            <p>Map location has not been configured.</p>
                        </div>
                    )}
                </div>
            </div>
            {/* End Map */}
        </>
    );
}