import VisaPageTemplate from '@/components/VisaPageTemplate';
import FederalSkilledWorkerContent from '@/components/visa-content/FederalSkilledWorkerContent';

export const metadata = {
  title: 'Federal Skilled Worker Program (FSWP) | Visapolis',
  description: 'Qualify for Canadian permanent residence based on your skilled work experience, education, and language abilities through the FSWP.',
};

export default function FederalSkilledWorkerPage() {
    return (
        <VisaPageTemplate 
            title="Federal Skilled Worker Program"
            breadcrumbText="Permanent Residence"
        >
            <FederalSkilledWorkerContent />
        </VisaPageTemplate>
    );
}