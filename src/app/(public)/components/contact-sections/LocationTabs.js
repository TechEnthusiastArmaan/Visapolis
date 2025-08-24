"use client";
import Image from "next/image";
import { useTemplateScripts } from "@/app/(public)/hooks/useTemplateScripts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons'; // Import the correct icon

const LocationItem = ({ city, details }) => (
    <div className="location-item hover-active-item">
        <Image src="/assets/img/icon/location.png" alt={`${city} Location Pin`} width={50} height={50} />
        <div className="location-details">
            <h5>{city} Visa Service</h5>
            <p>{details}</p>
        </div>
    </div>
);

export default function LocationTabs() {
    // This hook initializes the hover effect on the location pins
    useTemplateScripts();

    return (
        <div className="contact-style-one-tabs">
            <nav>
                <div className="nav nav-tabs" id="nav-tab" >
                    <button className="nav-link " id="contact_tab_1">
                        <FontAwesomeIcon icon={faPhone} /> +1 123456789
                    </button>
                    <button className="nav-link" id="contact_tab_2">
                        <FontAwesomeIcon icon={faEnvelope} /> abc@123gmail.com
                    </button>
                    <button className="nav-link" id="contact_tab_3">
                        <FontAwesomeIcon icon={faLocationPin} /> 444, eddmonton, canda
                    </button>
                </div>
            </nav>

            <div className="contact-one-tab-info">
                <div className="tab-content" id="nav-tabContent">
                    {/* New York Tab */}
                    <div className="tab-pane fade show active" id="contact_tabs_1" role="tabpanel" aria-labelledby="contact_tab_1">
                        <div className="global-location-items">
                            <LocationItem city="NY" details="70240 Avenue of the Moon MF Tower, East California" />
                            <LocationItem city="Immigration" details="70240 Avenue of the Moon MF Tower, East California" />
                            <LocationItem city="Travel" details="70240 Avenue of the Moon MF Tower, East California" />
                            <LocationItem city="Schengen" details="70240 Avenue of the Moon MF Tower, East California" />
                            <Image src="/assets/img/shape/map.png" alt="World Map" width={716} height={430} />
                        </div>
                    </div>
                    {/* You can duplicate the <div className="tab-pane"> for other cities if needed */}
                </div>
            </div>
        </div>
    );
}