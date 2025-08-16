import Link from 'next/link';
import Image from 'next/image';

const Breadcrumb = ({ title, breadcrumbText = "About" }) => {
    return (
        <div className="breadcrumb-area with-banner bg-cover text-center bg-dark text-light" style={{ backgroundImage: `url(/assets/img/banner/7.jpg)` }}>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h1>{title}</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li>
                                    <Link href="/"><i className="fas fa-home"></i> Home</Link>
                                </li>
                                {/* Dynamically use the text provided, e.g., "About" */}
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