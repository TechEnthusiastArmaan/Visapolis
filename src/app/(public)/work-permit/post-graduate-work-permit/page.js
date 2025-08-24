import VisaPageTemplate from '@/components/VisaPageTemplate';
import PostGraduateWorkPermitContent from '@/components/visa-content/PostGraduateWorkPermitContent';

export const metadata = {
  title: 'Post-Graduate Work Permit (PGWP) | Visapolis',
  description: 'Turn your Canadian education into valuable work experience with a PGWP. Learn about the eligibility requirements.',
};

export default function PostGraduateWorkPermitPage() {
    return (
        <VisaPageTemplate 
            title="Post-Graduate Work Permit"
            breadcrumbText="Work Permit"
        >
            <PostGraduateWorkPermitContent />
        </VisaPageTemplate>
    );
}