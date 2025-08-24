import VisaPageTemplate from '@/components/VisaPageTemplate';
import StudyPermitContent from '@/components/visa-content/StudyPermitContent';

export const metadata = {
  title: 'Study Permit Canada | Visapolis',
  description: 'Navigate the Canadian Study Permit application process with our expert guidance. Learn about DLI requirements, PAL, and financial proof.',
};

export default function StudyPermitPage() {
    return (
        <VisaPageTemplate 
            title="Study Permit"
            breadcrumbText="Study in Canada"
        >
            <StudyPermitContent />
        </VisaPageTemplate>
    );
}