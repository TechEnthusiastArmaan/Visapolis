// src/app/(public)/visa/visitor-visa/page.js
import VisaPageTemplate from '@/components/VisaPageTemplate'; // Assuming alias setup
import VisitorVisaContent from '@/components/visa-content/VisitorVisaContent';

export const metadata = {
  title: 'Visitor Visa | Visapolis',
  description: 'Learn about the requirements and application process for a Canadian Visitor Visa.',
};

export default function VisitorVisaPage() {
    return (
        <VisaPageTemplate 
            title="Visitor Visa"
            breadcrumbText="Visa"
        >
            <VisitorVisaContent />
        </VisaPageTemplate>
    );
}