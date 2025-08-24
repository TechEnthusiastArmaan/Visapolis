import VisaPageTemplate from '@/components/VisaPageTemplate';
import StartupVisaContent from '@/components/visa-content/StartupVisaContent';

export const metadata = {
  title: 'Start-up Visa Program | Visapolis',
  description: 'Launch your innovative business and get permanent residence in Canada through the Start-up Visa (SUV) program.',
};

export default function StartupVisaPage() {
    return (
        <VisaPageTemplate 
            title="Start-up Visa Program"
            breadcrumbText="Business"
        >
            <StartupVisaContent />
        </VisaPageTemplate>
    );
}