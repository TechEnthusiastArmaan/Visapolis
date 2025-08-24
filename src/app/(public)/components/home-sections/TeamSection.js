import Image from 'next/image';
import Link from 'next/link';

// NOTE: We don't use the FontAwesomeIcon component here to let the template's CSS take full control.
// The icons will be rendered using traditional <i> tags with Font Awesome classes.

const TeamMember = ({ name, title, imgSrc, delay }) => (
    <div className="col-lg-4 col-md-6 mb-30">
        <div className="team-style-one-item wow fadeInUp" data-wow-delay={delay}>
            <div className="thumb">
                <Image src={imgSrc} alt={`${name}, ${title}`} width={411} height={463} />
                {/* This is the missing decorative shape image */}
                <Image src="/assets/img/shape/31.png" alt="Decorative Shape" className="shape" width={343} height={50} />
                <div className="social-info">
                    <div className="social-overlay">
                        <ul>
                            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="#"><i className="fab fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        </ul>
                        {/* The clickable icon that reveals others */}
                        <div className="icon">
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    {/* The static chat icon */}
                    <Link href="/contact-us"><i className="fas fa-comments-alt"></i></Link>
                </div>
            </div>
            <div className="info">
                <h4><Link href="/team-details">{name}</Link></h4>
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