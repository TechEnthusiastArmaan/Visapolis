import VisaPageTemplate from '@/components/VisaPageTemplate';
import IntraCompanyTransferProgramContent from '@/components/visa-content/IntraCompanyTransferProgramContent';
export const metadata = {
title: 'Intra-Company Transfer (ICT) Program | Visapolis',
description: 'Temporarily transfer key employees to your Canadian affiliate, subsidiary, or parent company through the ICT program.',
};
export default function IntraCompanyTransferProgramPage() {
return (
<VisaPageTemplate
title="Intra-Company Transfer Program"
breadcrumbText="Business"
>
<IntraCompanyTransferProgramContent />
</VisaPageTemplate>
);
}