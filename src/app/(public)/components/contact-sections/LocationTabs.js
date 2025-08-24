// src/app/(public)/components/contact-sections/LocationTabs.js
"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt, faClock } from '@fortawesome/free-solid-svg-icons';

// A reusable component for each card to keep our code DRY
const ContactInfoCard = ({ icon, bgColorClass, title, children }) => {
    return (
        <div className="contact-info-card">
            <div className={`icon-wrapper ${bgColorClass}`}>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className="card-content">
                <h5>{title}</h5>
                {children}
            </div>
        </div>
    );
};

// The main component, which now includes a heading
export default function LocationTabs() {
    return (
        // We use a React Fragment <> to wrap both the heading and the grid
        <>
            {/* 
              This is the new heading section. 
              It uses your theme's existing "site-heading" classes for consistency.
              I've removed 'text-center' to align it to the left with the cards.
            */}
            <div className="site-heading">
                <h4 className="sub-title">Contact Information</h4>
                <h2 className="title">Get in Touch With Our Team!</h2>
            </div>

            <div className="contact-info-grid">
                <div className="row">
                    {/* Card 1: Email */}
                    <div className="col-lg-6 col-md-6">
                        <ContactInfoCard
                            icon={faEnvelope}
                            bgColorClass="bg-blue"
                            title="General Inquiries"
                        >
                            <p>
                                <a href="mailto:info@vidyacorp.com.com">info@vidyacorp.com</a>
                            </p>
                        </ContactInfoCard>
                    </div>

                    {/* Card 2: Address */}
                    <div className="col-lg-6 col-md-6">
                        <ContactInfoCard
                            icon={faMapMarkerAlt}
                            bgColorClass="bg-green"
                            title="Our Location"
                        >
                            <p>Ludhiana, Punjab, India</p>
                        </ContactInfoCard>
                    </div>

                    {/* Card 3: Phone */}
                    <div className="col-lg-6 col-md-6">
                        <ContactInfoCard
                            icon={faPhoneAlt}
                            bgColorClass="bg-purple"
                            title="Call Us"
                        >
                            <p>
                               <a href="tel:+910000000000">+91 0000000000</a>
                            </p>
                        </ContactInfoCard>
                    </div>

                    {/* Card 4: Hours */}
                    <div className="col-lg-6 col-md-6">
                        <ContactInfoCard
                            icon={faClock}
                            bgColorClass="bg-orange"
                            title="Working Hours"
                        >
                            <p>Mon-Fri : 9:00AM-5:00PM</p>
                        </ContactInfoCard>
                    </div>

                </div>
            </div>
        </>
    );
}