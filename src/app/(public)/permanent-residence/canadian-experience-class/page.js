import VisaPageTemplate from '@/components/VisaPageTemplate';
import CanadianExperienceClassContent from '@/components/visa-content/CanadianExperienceClassContent';

export const metadata = {
  title: 'Canadian Experience Class (CEC) | Visapolis',
  description: 'Leverage your Canadian work experience for permanent residence through the CEC program managed by Express Entry.',
};

export default function CanadianExperienceClassPage() {
    return (
        <VisaPageTemplate 
            title="Canadian Experience Class"
            breadcrumbText="Permanent Residence"
        >
            <CanadianExperienceClassContent />
        </VisaPageTemplate>
    );
}