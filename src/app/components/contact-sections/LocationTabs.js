"use client";
import Image from "next/image";
import { useTemplateScripts } from "@/app/hooks/useTemplateScripts";

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
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="contact_tab_1" data-bs-toggle="tab" data-bs-target="#contact_tabs_1" type="button" role="tab" aria-controls="contact_tabs_1" aria-selected="true">New York</button>
                    <button className="nav-link" id="contact_tab_2" data-bs-toggle="tab" data-bs-target="#contact_tabs_2" type="button" role="tab" aria-controls="contact_tabs_2" aria-selected="false">Paris</button>
                    <button className="nav-link" id="contact_tab_3" data-bs-toggle="tab" data-bs-target="#contact_tabs_3" type="button" role="tab" aria-controls="contact_tabs_3" aria-selected="true">Dubai</button>
                    <button className="nav-link" id="contact_tab_4" data-bs-toggle="tab" data-bs-target="#contact_tabs_4" type="button" role="tab" aria-controls="contact_tabs_4" aria-selected="false">China</button>
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