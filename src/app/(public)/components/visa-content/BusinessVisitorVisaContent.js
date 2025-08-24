// src/app/(public)/components/visa-content/BusinessVisitorVisaContent.js
import Image from 'next/image';

export default function BusinessVisitorVisaContent() {
    return (
        <>
            <div className="thumb wow fadeInUp">
                <Image 
                    src="/assets/img/banner/10.jpg" 
                    alt="Professionals shaking hands at an international business meeting" 
                    width={820} height={422} 
                    style={{ borderRadius: '10px', objectFit: 'cover' }} 
                />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="300ms">Engage in Business Activities with a Visitor Visa</h2>
            <p className="wow fadeInUp" data-wow-delay="500ms">
                A Business Visitor Visa allows you to enter Canada for a temporary period to engage in international business activities. It&apos;s important to note that business visitors do not enter the Canadian labour market and remain employed and paid by their company outside Canada.
            </p>
            
            <h3>Permitted Business Activities</h3>
            <p>
                There are many reasons you might come to Canada as a business visitor, including:
            </p>
            <ul className="list-style-four mt-3">
                <li>Attending conferences, conventions, fairs, or board of directors meetings.</li>
                <li>Handling after-sales services as part of a warranty or sales agreement.</li>
                <li>Supervising the installation or dismantling of equipment purchased outside Canada.</li>
                <li>Receiving or providing training from a Canadian parent or subsidiary company.</li>
            </ul>
        </>
    );
}