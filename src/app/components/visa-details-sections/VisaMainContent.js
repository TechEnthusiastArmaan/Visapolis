// src/app/components/visa-details-sections/VisaMainContent.js
"use client";

import Image from 'next/image';
import { useTemplateScripts } from '@/app/hooks/useTemplateScripts';

export default function VisaMainContent() {
    // This hook ensures WOW.js animations are initialized for the content.
    useTemplateScripts();
    
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image src="/assets/img/banner/10.jpg" alt="A person handing over a passport at a counter" width={820} height={422} style={{ borderRadius: '10px' }} />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Allows foreign nationals in a country</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                We denounce with righteous indige nation and dislike men who are so beguiled and demo realized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue cannot foresee. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled data structures manages data in technology.
            </p>
            <div className="features mt-40 mt-xs-30 mb-40 mb-xs-30">
                <div className="row align-center">
                    <div className="col-lg-6 col-md-6 mt-xs-30 wow fadeInLeft" data-wow-delay="500ms">
                        <div className="thumbs mb-xs-30">
                            <Image src="/assets/img/blog/7.jpg" alt="Group discussion" width={394} height={250} style={{ borderRadius: '10px' }}/>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="500ms">
                        <div className="content">
                            <h3>Online Presence</h3>
                            <ul className="list-style-four">
                                <li>Business Name & Logo</li>
                                <li>Website & Social Media</li>
                                <li>MVP (Minimum Viable Product)</li>
                                <li>Service Delivery System</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <h3>Career Opportunities</h3>
            <p>
                Nam libero tempore, cum soluta nobis est elig endi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repelle ndus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </p>

            <div className="card-style-three mt-40 wow fadeInUp" data-wow-delay="300ms">
                <div className="item">
                    <div className="number">01</div>
                    <div className="info">
                        <h4>Quality Visa Service</h4>
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="number">02</div>
                    <div className="info">
                        <h4>Global Connection</h4>
                        <p>
                            Remember long established fact that a reader will be distracted by the readable content of a page when looking at its layout the point.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}