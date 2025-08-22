import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'; // Import the angle-right icon


const Breadcrumb = ({ title, breadcrumbText }) => {
    return (
        <div className="breadcrumb-area with-banner bg-cover text-center bg-dark text-light" style={{ backgroundImage: `url(/assets/img/banner/11.jpeg)` }}>
            {/* These shapes are the key missing visual element */}
            {/* <div className="shape-left">
                <Image src="/assets/img/shape/18.png" alt="Decorative shape" width={787} height={538} />
            </div>
            <div className="shape-right">
                <Image src="/assets/img/shape/19.png" alt="Decorative shape" width={739} height={514} />
            </div> */}

             <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>{title}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li>
                                    <Link href="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                                </li>
                                {/* The separator is now a FontAwesomeIcon */}
                                <li className="breadcrumb-separator">
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </li>
                                <li className="active">{breadcrumbText}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Breadcrumb;
