import VisaPageTemplate from '@/components/VisaPageTemplate';
import ExpressEntryContent from '@/components/visa-content/ExpressEntryContent';

export const metadata = {
  title: 'Express Entry Canada | Visapolis',
  description: 'Understand the Express Entry system for skilled workers seeking Canadian permanent residence. Learn about CRS scores and program eligibility.',
};

export default function ExpressEntryPage() {
    return (
        <VisaPageTemplate 
            title="Express Entry"
            breadcrumbText="Permanent Residence"
        >
            <ExpressEntryContent />
        </VisaPageTemplate>
    );
}