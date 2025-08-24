"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Our custom hook to initialize all template scripts
import { useTemplateScripts } from '../hooks/useTemplateScripts';

// Full List of Sections
import BannerSection from './home-sections/BannerSection';
import AboutSection from './home-sections/AboutSection';
import VisaCategorySection from './home-sections/VisaCategorySection';
import TrainingSection from './home-sections/TrainingSection';
import ProcessSection from './home-sections/ProcessSection';
import VisaCountrySection from './home-sections/VisaCountrySection';
import TeamSection from './home-sections/TeamSection';
import WhyChooseUsSection from './home-sections/WhyChooseUsSection';
import TestimonialSection from './home-sections/TestimonialSection';
import BlogSection from './home-sections/BlogSection';

export default function HomePageClient({ blogs }) {
    // This hook will handle all animations for us!
    useTemplateScripts();

    // Correct preloader logic
    useEffect(() => {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            const timer = setTimeout(() => {
                preloader.style.transition = 'opacity 0.5s ease';
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = "none";
                }, 500);
            }, 100); 
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <>
            <div id="preloader" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 99999, background: '#ffffff' }}>
                <div className="visaco-loader-inner">
                    <div className="visaco-loader">
                        {[...Array(8)].map((_, i) => <span key={i} className="visaco-loader-item"></span>)}
                    </div>
                </div>
            </div>

            {/* Render all the sections for the home page */}
            <BannerSection />
            <AboutSection />
            <VisaCategorySection />
            <TrainingSection />
            <ProcessSection />
            <VisaCountrySection />
            <TeamSection />
            <WhyChooseUsSection />
            <TestimonialSection />
            <BlogSection blogs={blogs} />
        </>
    );
}