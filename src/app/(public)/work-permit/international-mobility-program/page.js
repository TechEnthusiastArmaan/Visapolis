import VisaPageTemplate from '@/components/VisaPageTemplate';
import InternationalMobilityProgramContent from '@/components/visa-content/InternationalMobilityProgramContent';

export const metadata = {
  title: 'International Mobility Program (IMP) | Visapolis',
  description: 'Discover how Canadian employers can hire temporary foreign workers without an LMIA through the IMP.',
};

export default function InternationalMobilityProgramPage() {
    return (
        <VisaPageTemplate 
            title="International Mobility Program"
            breadcrumbText="Work Permit"
        >
            <InternationalMobilityProgramContent />
        </VisaPageTemplate>
    );
}