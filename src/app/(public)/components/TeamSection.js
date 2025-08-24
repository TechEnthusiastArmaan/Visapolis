import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faDribbble, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPlus, faComments } from '@fortawesome/free-solid-svg-icons';

const TeamMember = ({ name, title, imgSrc, delay }) => (
    <div className="col-lg-4 col-md-6 mb-30">
        <div className="team-style-one-item wow fadeInUp" data-wow-delay={delay}>
            <div className="thumb">
                <Image src={imgSrc} alt={`${name}, ${title}`} width={360} height={420} />
                <Image src="/assets/img/shape/31.png" alt="Decorative Shape" className="shape" width={164} height={188} />
                <div className="social-info">
                    <div className="social-overlay">
                        <ul>
                            <li><a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faDribbble} /></a></li>
                            <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                        </ul>
                        <div className="icon"><FontAwesomeIcon icon={faPlus} /></div>
                    </div>
                    <Link href="/contact"><FontAwesomeIcon icon={faComments} /></Link>
                </div>
            </div>
            <div className="info">
                <h4><Link href="/team/aleesha-brown">{name}</Link></h4>
                <span>{title}</span>
            </div>
        </div>
    </div>
);


const TeamSection = () => {
    return (
        <div id="team" className="team-style-one-area default-padding bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Our Expert Members</h4>
                            <h2 className="title split-text">Introducing our skilled visa process specialists</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <TeamMember name="Aleesha Brown" title="Visa Counselor" imgSrc="/assets/img/team/1.jpg" />
                    <TeamMember name="Kevin Martin" title="Immigration Officer" imgSrc="/assets/img/team/2.jpg" delay="100ms" />
                    <TeamMember name="Sarah Albert" title="Immigration Specialist" imgSrc="/assets/img/team/3.jpg" delay="200ms" />
                </div>
            </div>
        </div>
    );
};

export default TeamSection;