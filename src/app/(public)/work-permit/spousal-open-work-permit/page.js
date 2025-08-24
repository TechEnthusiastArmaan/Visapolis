import VisaPageTemplate from '@/components/VisaPageTemplate';
import SpousalOpenWorkPermitContent from '@/components/visa-content/SpousalOpenWorkPermitContent';
export const metadata = {
title: 'Spousal Open Work Permit (SOWP) | Visapolis',
description: 'Learn how spouses and common-law partners of workers, students, and citizens can obtain an open work permit in Canada.',
};
export default function SpousalOpenWorkPermitPage() {
return (
<VisaPageTemplate
title="Spousal Open Work Permit"
breadcrumbText="Work Permit"
>
<SpousalOpenWorkPermitContent />
</VisaPageTemplate>
);
}