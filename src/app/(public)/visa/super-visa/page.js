import VisaPageTemplate from '@/components/VisaPageTemplate';
import SuperVisaContent from '@/components/visa-content/SuperVisaContent';

export const metadata = {
  title: 'Super Visa | Visapolis',
  description: 'Learn how to bring your parents and grandparents to Canada for extended stays with the Super Visa program.',
};

export default function SuperVisaPage() {
    return (
        <VisaPageTemplate 
            title="Super Visa"
            breadcrumbText="Visa"
        >
            <SuperVisaContent />
        </VisaPageTemplate>
    );
}