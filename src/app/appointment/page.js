// src/app/appointment/page.js

import Breadcrumb from "../components/about-sections/Breadcrumb";
import ApplicationForm from "../components/ApplicationForm";
import Image from "next/image";

export const metadata = {
  title: 'Appointment & Application Form',
  description: 'Apply for your visa by filling out our comprehensive application form. Get started on your journey with Visaco today.',
};

export default function AppointmentPage() {
    return (
        <>
            <Breadcrumb title="Apply Form" breadcrumbText="Apply Form" />
            
            <div className="appoinment-style-one-area default-padding appoinment-page">
                <div className="container">
                    <div className="row align-center">
                        
                        <div className="col-xl-6 offset-xl-1 order-lg-last">
                            {/* The form itself is a client component for state management */}
                            <ApplicationForm />
                        </div>

                        <div className="col-xl-5">
                            <div className="appoinment-style-two-thumb">
                                <div className="thumb-inner">
                                    <Image src="/assets/img/illustration/11.png" alt="Illustration of a person with documents" width={485} height={600} />
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="50" data-speed="1000">50</div>
                                    </div>
                                    <h4>Daily Application</h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}