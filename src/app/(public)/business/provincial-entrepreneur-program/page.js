import VisaPageTemplate from '@/components/VisaPageTemplate';
import ProvincialEntrepreneurProgramContent from '@/components/visa-content/ProvincialEntrepreneurProgramContent';

export const metadata = {
  title: 'Provincial Entrepreneur Programs | Visapolis',
  description: 'Invest in and manage a business in a specific Canadian province with various Provincial Entrepreneur Programs.',
};

export default function ProvincialEntrepreneurProgramPage() {
    return (
        <VisaPageTemplate 
            title="Provincial Entrepreneur Programs"
            breadcrumbText="Business"
        >
            <ProvincialEntrepreneurProgramContent />
        </VisaPageTemplate>
    );
}