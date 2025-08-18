"use client";

import { useTemplateScripts } from "../hooks/useTemplateScripts";

// We'll hardcode the FAQ data here. In a real app, this would come from a CMS.
const faqData = [
    {
        id: "1",
        question: "What documentation do I need to work in trucking?",
        answer: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
        show: true // This one is open by default
    },
    {
        id: "2",
        question: "What logistics services does your company offer?",
        answer: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
        show: false
    },
    {
        id: "3",
        question: "Do you handle cross-border shipments?",
        answer: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
        show: false
    },
    {
        id: "4",
        question: "Do you transport small packages?",
        answer: "New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position.",
        show: false
    }
];

export default function FaqAccordion() {
    // This hook initializes the WOW.js animations
    useTemplateScripts();

    return (
        <div className="accordion wow fadeInUp" id="faqAccordion">
            {faqData.map(faq => (
                <div className="accordion-item accordion-style-one" key={faq.id}>
                    <h2 className="accordion-header" id={`heading_${faq.id}`}>
                        <button 
                            className={`accordion-button ${!faq.show ? 'collapsed' : ''}`} 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target={`#collapse_${faq.id}`} 
                            aria-expanded={faq.show ? 'true' : 'false'}
                            aria-controls={`collapse_${faq.id}`}
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div 
                        id={`collapse_${faq.id}`} 
                        className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`} 
                        aria-labelledby={`heading_${faq.id}`} 
                        data-bs-parent="#faqAccordion"
                    >
                        <div className="accordion-body">
                            <p>
                                {faq.answer}
                            </p>
                            <ul className="list-style-one">
                                <li>Business Management consultation</li>
                                <li>Team Building Leadership</li>
                                <li>Growth Method Analysis</li>
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}