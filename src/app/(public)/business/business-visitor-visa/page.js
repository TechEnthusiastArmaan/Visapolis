import VisaPageTemplate from '@/components/VisaPageTemplate';
import BusinessVisitorVisaContent from '@/components/visa-content/BusinessVisitorVisaContent';

export const metadata = {
  title: 'Business Visitor Visa | Visapolis',
  description: 'Engage in international business activities in Canada, such as attending meetings and conferences, with a business visitor visa.',
};

export default function BusinessVisitorVisaPage() {
    return (
        <VisaPageTemplate 
            title="Business Visitor Visa"
            breadcrumbText="Business"
        >
            <BusinessVisitorVisaContent />
        </VisaPageTemplate>
    );
}