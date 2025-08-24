import VisaPageTemplate from '@/components/VisaPageTemplate';
import ProvincialImmigrationContent from '@/components/visa-content/ProvincialImmigrationContent';

export const metadata = {
  title: 'Provincial Nominee Programs (PNP) | Visapolis',
  description: 'Explore immigration pathways to specific provinces or territories in Canada through the Provincial Nominee Programs (PNP).',
};

export default function ProvincialImmigrationPage() {
    return (
        <VisaPageTemplate 
            title="Provincial Nominee Programs"
            breadcrumbText="Permanent Residence"
        >
            <ProvincialImmigrationContent />
        </VisaPageTemplate>
    );
}