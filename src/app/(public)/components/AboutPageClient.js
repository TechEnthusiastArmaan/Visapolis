"use client";

import Link from 'next/link';

// Custom hook to initialize all template-specific JavaScript animations and plugins
import { useTemplateScripts } from '../hooks/useTemplateScripts';

// Import all the section components required for the About Us page
import Breadcrumb from './about-sections/Breadcrumb';
import AboutIntroSection from './about-sections/AboutIntroSection';
import FunFactSection from './about-sections/FunFactSection';
// import AboutTestimonialSection from './about-sections/AboutTestimonialSection';
import ProcessSection from './home-sections/ProcessSection'; // Re-using from home page
// import TeamSection from './home-sections/TeamSection'; // Re-using from home page

export default function AboutPageClient() {
    // This custom hook handles all the necessary script initializations (WOW.js, Swiper, etc.)
    // It runs automatically when the component mounts and on route changes.
    useTemplateScripts();

    return (
        <>
            {/* Start Breadcrumb */}
            <Breadcrumb title="About Us" breadcrumbText="About" />
            {/* End Breadcrumb */}

            {/* Start About Section */}
            <AboutIntroSection />
            {/* End About Section */}

            {/* Start Fun Fact Section */}
            <FunFactSection />
            {/* End Fun Fact Section */}

            {/* Start Process Section (Re-used from Homepage) */}
            <ProcessSection />
            {/* End Process Section */}

            {/* Start Testimonial Section */}
            {/* <AboutTestimonialSection /> */}
            {/* End Testimonial Section */}
            
            {/* Start Team Section (Re-used from Homepage) */}
            {/* <TeamSection /> */}
            {/* End Team Section */}
        </>
    );
}