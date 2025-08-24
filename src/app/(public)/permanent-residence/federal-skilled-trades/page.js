import VisaPageTemplate from '@/components/VisaPageTemplate';
import FederalSkilledTradesContent from '@/components/visa-content/FederalSkilledTradesContent';

export const metadata = {
  title: 'Federal Skilled Trades Program (FSTP) | Visapolis',
  description: 'A pathway to permanent residence for skilled trades workers. Learn about the eligibility requirements for the FSTP.',
};

export default function FederalSkilledTradesPage() {
    return (
        <VisaPageTemplate 
            title="Federal Skilled Trades Program"
            breadcrumbText="Permanent Residence"
        >
            <FederalSkilledTradesContent />
        </VisaPageTemplate>
    );
}