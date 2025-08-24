// src/app/(public)/work-permit/lmia/page.js
import VisaPageTemplate from '@/components/VisaPageTemplate';
import LMIAContent from '@/components/visa-content/LMIAContent'; // Create this content component

export const metadata = {
  title: 'LMIA Work Permit | Visapolis',
  description: 'Understand the Labour Market Impact Assessment (LMIA) process for working in Canada.',
};

export default function LMIAPage() {
    return (
        <VisaPageTemplate 
            title="LMIA Work Permit"
            breadcrumbText="Work Permit"
        >
            <LMIAContent />
        </VisaPageTemplate>
    );
}