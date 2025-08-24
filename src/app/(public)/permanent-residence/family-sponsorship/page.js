import VisaPageTemplate from '@/components/VisaPageTemplate';
import FamilySponsorshipContent from '@/components/visa-content/FamilySponsorshipContent';

export const metadata = {
  title: 'Family Sponsorship Canada | Visapolis',
  description: 'Reunite with your family in Canada by sponsoring your spouse, partner, children, parents, or grandparents.',
};

export default function FamilySponsorshipPage() {
    return (
        <VisaPageTemplate 
            title="Family Sponsorship"
            breadcrumbText="Permanent Residence"
        >
            <FamilySponsorshipContent />
        </VisaPageTemplate>
    );
}