// src/app/contact/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import ContactForm from "../components/contact-sections/ContactForm";
import LocationTabs from "../components/contact-sections/LocationTabs";

// SEO metadata for the Contact Us page
export const metadata = {
  title: 'Contact Us',
  description: 'Have questions? Get in touch with our team in New York, Paris, Dubai, or China for expert visa and immigration consulting.',
};

export default function ContactPage() {
    // This is the Server Component for the Contact page.
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
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48388.929990966964!2d-74.00332!3d40.711233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653598669477!5m2!1sen!2sus"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
            {/* End Map */}
        </>
    );
}