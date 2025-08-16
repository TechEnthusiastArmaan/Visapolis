// src/app/assessment/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import AssessmentForm from "../components/AssessmentForm";
import "../forms.css";
import Image from "next/image";

export const metadata = {
  title: 'Free Assessment Form',
  description: 'Complete our detailed assessment form to help us understand your immigration and visa needs.',
};

export default function AssessmentPage() {
    // This server component sets up the page layout.
    // The interactive form is handled by the <AssessmentForm /> client component.
    return (
        <>
            <Breadcrumb title="Free Assessment" breadcrumbText="Assessment Form" />
            
            <div className="appoinment-style-one-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                           <div className="appoinment-style-one-info">
                                <h2 className="text-center mb-40">Please Fill Out The Form Below</h2>
                                <AssessmentForm />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}