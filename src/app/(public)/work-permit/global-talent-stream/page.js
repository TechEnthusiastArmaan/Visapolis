import VisaPageTemplate from '@/components/VisaPageTemplate';
import GlobalTalentStreamContent from '@/components/visa-content/GlobalTalentStreamContent';

export const metadata = {
  title: 'Global Talent Stream (GTS) | Visapolis',
  description: 'Accelerate your business growth by hiring highly skilled foreign talent through Canada\'s Global Talent Stream.',
};

export default function GlobalTalentStreamPage() {
    return (
        <VisaPageTemplate 
            title="Global Talent Stream"
            breadcrumbText="Work Permit"
        >
            <GlobalTalentStreamContent />
        </VisaPageTemplate>
    );
}