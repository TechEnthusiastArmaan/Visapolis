// src/app/(public)/components/booking/AppointmentIntro.js
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// We'll use Font Awesome icons that match your theme
import { faGlobe, faUndo } from '@fortawesome/free-solid-svg-icons';

export default function AppointmentIntro() {
  return (
    <div className="appointment-intro-content">
      <span className="sub-title">ABOUT OUR COMPANY</span>
      <h2 className="main-title">Trusted visa & immigration solutions</h2>
      <p className="description">
        Visapolis Immigration Inc. is a Regulated Canadian Immigration Consulting firm. We are committed to delivering premium, client-focused services for both temporary and permanent residency pathways.
      </p>
<div 
        className="fee-notice"
        style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Use a semi-transparent background for this section
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '8px',
            padding: '15px 20px',
            textAlign: 'center',
            marginTop: '30px' // Add some space above the notice
        }}
    >
        <p style={{ margin: 0, fontWeight: '700', color: 'var(--color-heading)' }}>
            Professional Fee: <span style={{ color: 'var(--color-primary)' }}>$50</span> for 30 minute consultation
        </p>
    </div>
    {/* --- END OF NEW SECTION --- */}


      {/* The feature list is commented out as in your file */}
      {/* <div className="features-list"> ... </div> */}

      {/* <div className="features-list">
        <div className="feature-item">
          <div className="icon">
            <FontAwesomeIcon icon={faGlobe} />
          </div>
          <div className="info">
            <h5>Best consultancy agency</h5>
            <p>Expert guidance from licensed professionals to increase your chances of success.</p>
          </div>
        </div>
        <div className="feature-item">
          <div className="icon">
            <FontAwesomeIcon icon={faUndo} />
          </div>
          <div className="info">
            <h5>Return visas available</h5>
            <p>Specializing in solutions for temporary visits, extensions, and re-entry.</p>
          </div>
        </div>
      </div> */}

    </div>
  );
}