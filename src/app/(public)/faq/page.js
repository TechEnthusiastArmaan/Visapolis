// src/app/faq/page.js

import InnerPageBreadcrumb from '@/app/(public)/components/about-sections/Breadcrumb';
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about visa applications, logistics, and our immigration consulting services.',
};

export default function FaqPage() {
    return (
        <>
            <InnerPageBreadcrumb title="Question and Answer" breadcrumbText="Faq" />
            
            <div className="faq-style-one-area default-padding bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            {/* The Accordion is a client component to ensure WOW.js animations run */}
                           <FaqAccordion />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}