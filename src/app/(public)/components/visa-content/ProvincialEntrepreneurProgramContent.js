// src/app/(public)/components/visa-content/ProvincialEntrepreneurProgramContent.js
import Image from 'next/image';
import Link from 'next/link';

export default function ProvincialEntrepreneurProgramContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="An entrepreneur launching a new business in a specific Canadian province" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Invest and Innovate: Provincial Entrepreneur Programs</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                Provincial entrepreneur programs are a vital part of Canada&apos;s business immigration strategy. These programs are designed to attract experienced foreign entrepreneurs who are willing to establish a new business or purchase an existing one in a specific province or territory, contributing to job creation and economic growth.
            </p>
            
            <h3>Program Goals and Structure</h3>
            <p>
                Each province and territory in Canada offers its own unique entrepreneur program with specific criteria and requirements. These programs are open to both international and domestic entrepreneurs who meet the eligibility standards. The main goal is to attract individuals who can:
            </p>
            <ul className="list-style-four mt-3">
                <li>Create jobs for Canadians.</li>
                <li>Drive innovation and introduce new technologies or business models.</li>
                <li>Contribute to the growth and competitiveness of the provincial economy.</li>
            </ul>
            
            <h3 className="mt-4">Examples of Provincial Programs</h3>
            <p>Some of the most popular entrepreneur streams include:</p>
            <ul className="list-style-four mt-3">
                <li>British Columbia Provincial Nominee Program (BC PNP) Entrepreneur Immigration</li>
                <li>Alberta Immigrant Nominee Program (AINP) Entrepreneur Stream</li>
                <li>Ontario Immigrant Nominee Program (OINP) Entrepreneur Stream</li>
            </ul>
             <Link className="btn-style-one circle mt-5" href="/contact">
                Explore Your Entrepreneurial Pathway<span></span>
            </Link>
        </>
    );
}